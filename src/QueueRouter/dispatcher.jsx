import { useContext, useEffect } from 'react'
import { RouterScrollContext, RouterSetterContext } from './RouterContext'
import { SwitchContext } from './SwitchContext'

// prevent multiple dispatches, useLeaveEnds and useEnterEnds at the same time
let isFirstTime = true
let isTransiting = false
let isLeaving = false
let isEntering = false

export const dispatch = (historyStore, setCurrentPath, setNextPath) => {
  if (!historyStore.current[0] || isTransiting || isLeaving || !isEntering) return
  isEntering = false
  isTransiting = true
  setNextPath(historyStore.current[0].pathname)
}

const useEnterEnd = () => {
  const { historyStore, setCurrentPath, setNextPath } = useContext(RouterSetterContext)

  return () => {
    // first mount only
    if (isFirstTime) {
      isFirstTime = false
      isEntering = true // get this `false` in `dispatch` function
      dispatch(historyStore, setCurrentPath, setNextPath)
      return
    }

    if (!historyStore.current[0] || !isTransiting || !isLeaving || isEntering) return
    isEntering = true // get this `false` in `dispatch` function
    historyStore.current.shift()
    isLeaving = false
    isTransiting = false
    dispatch(historyStore, setCurrentPath, setNextPath)
  }
}

const useLeaveEnd = () => {
  const { historyStore, setCurrentPath } = useContext(RouterSetterContext)
  const { tmpScrollMemo } = useContext(RouterScrollContext)

  return () => {
    if (!historyStore.current[0] || !isTransiting || isLeaving || isEntering) return
    isLeaving = true
    // remember current scroll position
    tmpScrollMemo.current = {
      action: historyStore.current[0].action,
      key: historyStore.current[0].key,
    }
    setCurrentPath(historyStore.current[0].pathname)
  }
}

export const useTransition = (enterAnimation = null, leaveAnimation = null) => {
  const { leaving } = useContext(SwitchContext) // `leaving` is passed down in Switch component
  const enterEnd = useEnterEnd()
  const leaveEnd = useLeaveEnd()

  useEffect(() => {
    leaving
      ? leaveAnimation
        ? leaveAnimation({ release: leaveEnd })
        : leaveEnd()
      : enterAnimation
      ? enterAnimation({ release: enterEnd })
      : enterEnd()
  }, [leaving])
}
