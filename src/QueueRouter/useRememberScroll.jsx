import { useEffect, useRef, useContext } from 'react'
import history from './history'
import { RouterScrollContext } from './RouterContext'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const useRememberScroll = (currentPath, nextPath, rememberScroll) => {
  const isFirst = useRef(true)
  const y = useRef(0) // scroll position when transit starts will be set
  const { scrollStore, tmpScrollStore, tmpScrollMemo } = useContext(RouterScrollContext)

  useEffect(() => {
    // when rememberScroll is false, scroll to the top of the page every time page changes
    if (!rememberScroll) {
      window.scrollTo(0, 0)
      return
    }

    if (isFirst.current) {
      // fire replace event to get `key` of history object
      history.replace({
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
      })
      scrollStore.current.push({
        key: history.location.key,
        scrollY: 0,
      })
      isFirst.current = false
      return
    }

    const store = scrollStore.current
    const tmpStore = tmpScrollStore.current
    const { action, key } = tmpScrollMemo.current
    let scrollY = 0

    if (action === 'POP') {
      for (let i = store.length - 1; i >= 0; i--) {
        if (store[i].key === key) {
          scrollY = store[i].scrollY // get the previous scroll position
          break
        }
      }
    }

    store[store.length - 1].scrollY = y.current // set the current scroll position
    tmpStore.forEach(val => {
      val.scrollY = y.current
    }) // rewrite by the current scroll position
    const newScrollItem = { key, scrollY: scrollY }

    scrollStore.current = [...store, ...tmpStore, newScrollItem] // merge
    tmpScrollStore.current = [] // reset
    window.scrollTo(0, scrollY)
  }, [currentPath])

  useEffect(() => {
    y.current = window.pageYOffset // remember the current scroll position
  }, [nextPath])
}

export default useRememberScroll
