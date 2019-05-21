import {useEffect, useRef, useContext} from 'react'
import history from './history'
import {RouterScrollContext} from './RouterContext'


if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const useRememberScroll = (currentPath, rememberScroll) => {
  const isFirst = useRef(true)
  const {scrollStore, tmpScrollStore, tmpScrollMemo} = useContext(RouterScrollContext)

  useEffect(() => {
    // when rememberScroll is false, scroll to the top of the page every time page changes
    if (!rememberScroll) {
      window.scrollTo(0, 0)
      return
    }

    if (isFirst.current) {
      // fire replace event to get `key` of history object
      history.replace({
        pathname: window.location.pathname
      })
      scrollStore.current.push({
        key: history.location.key,
        scrollY: 0
      })
      isFirst.current = false
      return
    }

    const store = scrollStore.current
    const {action, key} = tmpScrollMemo.current
    let scrollY = 0

    if (action === 'POP') {
      for (let i = store.length - 1; i >= 0; i--) {
        if (store[i].key === key) {
          scrollY = store[i].scrollY
          break
        }
      }
    }

    const y = window.pageYOffset
    store[store.length - 1].scrollY = y // set current scroll Y to the current key
    const newScrollItem = { key, scrollY: 0 }
    const tmpStore = tmpScrollStore.current
    tmpStore.forEach(val => { val.scrollY = y }) // rewrite scrollY

    scrollStore.current = [...store, ...tmpStore, newScrollItem] // merge
    tmpScrollStore.current = [] // reset

    window.scrollTo(0, scrollY)
  }, [currentPath])
}

export default useRememberScroll
