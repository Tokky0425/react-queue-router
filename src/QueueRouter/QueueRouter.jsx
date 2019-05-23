import React, {useState, useEffect, useRef} from 'react'
import history from './history'
import {RouterContextProvider, RouterSetterContextProvider, RouterScrollContextProvider} from './RouterContext'
import {dispatch} from './dispatcher'

const QueueRouter = ({children}) => {
  const [currentPath, setCurrentPath] = useState(history.location.pathname)
  const [nextPath, setNextPath] = useState(currentPath)
  const lastPath = useRef(history.location.pathname)
  const historyStore = useRef([])

  // these Refs will be used in `useRememberScroll`
  const scrollStore = useRef([])
  // object with `key` will be stored in `tmpScrollStore` when the hit link is same as the current one
  const tmpScrollStore = useRef([])
  const tmpScrollMemo = useRef({key: '', scrollY: 0})

  useEffect(() => {
    history.listen((e) => {
      const {action, location} = history
      const {pathname} = location

      // push to historyStore only when different path is detected
      if (lastPath.current !== pathname) {
        historyStore.current.push({ ...e, action })
        dispatch(historyStore, setCurrentPath, setNextPath)
      } else {
        // push the object with `key` to `tmpScrollStore`
        // `tmpScrollStore` will be merged with `scrollStore` in `useRememberScroll`
        tmpScrollStore.current.push({ key: e.key, scrollY: 0 })
      }

      lastPath.current = pathname
    })
  }, [])

  return (
    <RouterSetterContextProvider value={{
      historyStore,
      setCurrentPath,
      setNextPath,
    }}>
      <RouterContextProvider value={{
        currentPath,
        nextPath,
      }}>
        <RouterScrollContextProvider value={{
          scrollStore,
          tmpScrollStore,
          tmpScrollMemo,
        }}>
          {children}
        </RouterScrollContextProvider>
      </RouterContextProvider>
    </RouterSetterContextProvider>
  )
}

export default QueueRouter
