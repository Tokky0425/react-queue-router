import React, { Fragment, Children, cloneElement, useContext } from 'react'
import { RouterContext } from './RouterContext'
import { SwitchContextProvider } from './SwitchContext'
import matchPath from './matchPath'
import useRememberScroll from './useRememberScroll'
import FallbackComponent from './FallbackComponent'

const Switch = ({ children, rememberScroll = false }) => {
  const { currentPath, nextPath } = useContext(RouterContext)
  useRememberScroll(currentPath, nextPath, rememberScroll)
  let isElementFound = false
  let element

  Children.forEach(children, child => {
    if (isElementFound) return
    const { path } = child.props
    const matched = matchPath(currentPath, { ...child.props, path })
    const isDefault = !path // for default (='Not Found') component
    if (matched || isDefault) {
      isElementFound = true
      const leaving = currentPath !== nextPath
      const params = matched ? matched.params : {}

      element = (
        <SwitchContextProvider value={{ leaving }}>
          {cloneElement(child, { params })}
        </SwitchContextProvider>
      )
    }
  })

  // fallback for when no route matches
  if (!element) {
    const leaving = currentPath !== nextPath
    element = (
      <SwitchContextProvider value={{ leaving }}>
        <FallbackComponent />
      </SwitchContextProvider>
    )
  }

  return <Fragment>{element}</Fragment>
}

export default Switch
