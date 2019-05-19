import React, {useState, useEffect, useRef} from 'react'
import history, {historyStore} from './history'
import {RouterContextProvider, RouterSetterContextProvider} from './RouterContext'
import {dispatch} from './dispatcher'

const QueueRouter = ({children}) => {
  const [currentPath, setCurrentPath] = useState(history.location.pathname)
  const [nextPath, setNextPath] = useState(currentPath)
  const lastPath = useRef(history.location.pathname)

  useEffect(() => {
    history.listen((e) => {
      const {pathname} = history.location
      // push only when different path is detected
      if (lastPath.current !== pathname) {
        historyStore.store.push({action: history.action, ...e})
        dispatch(setCurrentPath, setNextPath)
      }
      lastPath.current = pathname
    })
  }, [])

  return (
    <RouterSetterContextProvider value={{
      setCurrentPath,
      setNextPath
    }}>
      <RouterContextProvider value={{
        currentPath,
        nextPath
      }}>
        {children}
      </RouterContextProvider>
    </RouterSetterContextProvider>
  )
}

export default QueueRouter
