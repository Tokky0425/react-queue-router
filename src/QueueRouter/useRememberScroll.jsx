import {useEffect, useRef, useContext} from 'react'
import history from './history'
import {RouterHistoryContext} from './RouterContext'


if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

let localHistoryStore = []
let currentCount = 0

const useRememberScroll = (currentPath, rememberScroll) => {
  const isFirst = useRef(true)
  const {historyStore} = useContext(RouterHistoryContext)

  useEffect(() => {
    history.replace({
      pathname: window.location.pathname
    }, {
      prevScrollPosition: window.pageYOffset
    })
    localHistoryStore.push({action: history.action, ...history.location})
  }, [])

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }

    // when rememberScroll is false, scroll to the top of the page every time page changes
    if (!rememberScroll) {
      window.scrollTo(0, 0)
    }

    const {action} = historyStore.current.latest
    if (action === 'PUSH') {
      localHistoryStore = localHistoryStore.slice(0, currentCount+1)
      localHistoryStore.push(historyStore.current.latest)
      window.scrollTo(0, 0)
      currentCount++
      return
    }

    // TODO: detect back or forward when currentCount is 0
    if (currentCount === 0) {
      localHistoryStore = []
      localHistoryStore.push(historyStore.current.latest)
      window.scrollTo(0, 0)
      return
    }

    const latestKey = historyStore.current.latest.key
    const prevKey = localHistoryStore[currentCount - 1].key
    const isGoingBack = latestKey === prevKey

    if (isGoingBack) {
      // when hitting back button
      const y = localHistoryStore[currentCount].state.prevScrollPosition // get the scroll position for the page you are going
      localHistoryStore[currentCount].state.prevScrollPosition = window.pageYOffset // this will be referred when hitting forward button later
      window.scrollTo(0, y)
      currentCount--
    } else {
      // when hitting forward button
      const y = localHistoryStore[currentCount + 1].state.prevScrollPosition // get the scroll position for the page you are going
      localHistoryStore[currentCount + 1].state.prevScrollPosition = window.pageYOffset // this will be referred when hitting back button later
      window.scrollTo(0, y)
      currentCount++
    }

  }, [currentPath])
}

export default useRememberScroll
