import {useContext, useEffect} from 'react'
import {RouterSetterContext} from './RouterContext'
import {SwitchContext} from './SwitchContext'
import {historyStore} from './history'

// prevent multiple dispatches, useLeaveEnds and useEnterEnds at the same time
let isFirstTime = true
let isTransiting = false
let isLeaving = false
let isEntering = false

export const dispatch = (setCurrentPath, setNextPath) => {
  if (!historyStore.store[0] || isTransiting || isLeaving || !isEntering) return
  isEntering = false
  isTransiting = true
  setNextPath(historyStore.store[0].pathname)
}

const useEnterEnd = () => {
  const {setCurrentPath, setNextPath} = useContext(RouterSetterContext)

  return () => {
    // first mount only
    if (isFirstTime) {
      isFirstTime = false
      isEntering = true // get this `false` in `dispatch` function
      dispatch(setCurrentPath, setNextPath)
      return
    }

    if (!historyStore.store[0] || !isTransiting || !isLeaving || isEntering) return
    isEntering = true // get this `false` in `dispatch` function
    historyStore.store.shift()
    isLeaving = false
    isTransiting = false
    dispatch(setCurrentPath, setNextPath)
  }
}

const useLeaveEnd = () => {
  const {setCurrentPath} = useContext(RouterSetterContext)

  return () => {
    if (!historyStore.store[0] || !isTransiting || isLeaving || isEntering) return
    isLeaving = true
    historyStore.latest = historyStore.store[0]
    setCurrentPath(historyStore.store[0].pathname)
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
