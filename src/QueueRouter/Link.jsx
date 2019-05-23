import React from 'react'
import history from './history'

const Link = ({ children, to }) => {
  const transition = event => {
    event.preventDefault()
    history.push(
      {
        pathname: event.currentTarget.pathname,
        search: event.currentTarget.search,
      },
      {
        scrollY: 0,
      }
    )
  }

  return (
    <a href={to} onClick={transition}>
      {children}
    </a>
  )
}

export default Link
