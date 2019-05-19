import {useContext, useEffect} from 'react'
import {RouterHistoryContext, RouterSetterContext} from './RouterContext'
import {SwitchContext} from './SwitchContext'

// prevent multiple dispatches, useLeaveEnds and useEnterEnds at the same time
let isFirstTime = true
let isTransiting = false
let isLeaving = false
let isEntering = false

export const dispatch = (historyStore, setCurrentPath, setNextPath) => {
  if (!historyStore.current.store[0] || isTransiting || isLeaving || !isEntering) return
  isEntering = false
  isTransiting = true
  setNextPath(historyStore.current.store[0].pathname)
}

const useEnterEnd = () => {
  const {setCurrentPath, setNextPath} = useContext(RouterSetterContext)
  const {historyStore} = useContext(RouterHistoryContext)

  return () => {
    // first mount only
    if (isFirstTime) {
      isFirstTime = false
      isEntering = true // get this `false` in `dispatch` function
      dispatch(historyStore, setCurrentPath, setNextPath)
      return
    }

    if (!historyStore.current.store[0] || !isTransiting || !isLeaving || isEntering) return
    isEntering = true // get this `false` in `dispatch` function
    historyStore.current.store.shift()
    isLeaving = false
    isTransiting = false
    dispatch(historyStore, setCurrentPath, setNextPath)
  }
}

const useLeaveEnd = () => {
  const {setCurrentPath} = useContext(RouterSetterContext)
  const {historyStore} = useContext(RouterHistoryContext)

  return () => {
    if (!historyStore.current.store[0] || !isTransiting || isLeaving || isEntering) return
    isLeaving = true
    historyStore.current.latest = historyStore.current.store[0]
    setCurrentPath(historyStore.current.store[0].pathname)
  }
}

export const useTransition = (enterAnimation = null, leaveAnimation = null) => {
  const {leaving} = useContext(SwitchContext) // `leaving` is passed down in Switch component
  const enterEnd = useEnterEnd()
  const leaveEnd = useLeaveEnd()

  useEffect(() => {
    leaving
      ? leaveAnimation ? leaveAnimation({release: leaveEnd}) : leaveEnd()
      : enterAnimation ? enterAnimation({release: enterEnd}) : enterEnd()
  }, [leaving])
}
