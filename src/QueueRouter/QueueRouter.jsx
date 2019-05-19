import React, {useState, useEffect, useRef} from 'react'
import history from './history'
import {RouterContextProvider, RouterSetterContextProvider, RouterHistoryContextProvider} from './RouterContext'
import {dispatch} from './dispatcher'

const QueueRouter = ({children}) => {
  const [currentPath, setCurrentPath] = useState(history.location.pathname)
  const [nextPath, setNextPath] = useState(currentPath)
  const lastPath = useRef(history.location.pathname)
  const historyStore = useRef({
    store: [],
    latest: null,
  })

  useEffect(() => {
    history.listen((e) => {
      const {pathname} = history.location
      // push only when different path is detected
      if (lastPath.current !== pathname) {
        historyStore.current.store.push({action: history.action, ...e})
        dispatch(historyStore, setCurrentPath, setNextPath)
      }
      lastPath.current = pathname
    })
  }, [])

  return (
    <RouterSetterContextProvider value={{
      setCurrentPath,
      setNextPath,
    }}>
      <RouterHistoryContextProvider value={{
        historyStore
      }}>
        <RouterContextProvider value={{
          currentPath,
          nextPath
        }}>
          {children}
        </RouterContextProvider>
      </RouterHistoryContextProvider>
    </RouterSetterContextProvider>
  )
}

export default QueueRouter
