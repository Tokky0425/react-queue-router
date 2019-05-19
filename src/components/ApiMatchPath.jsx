import React, {Fragment} from 'react'
import CodeBlock, {C} from './CodeBlock'
import {enterAnimation, leaveAnimation} from './animation'
import {useTransition} from '../QueueRouter'
import Helmet from './Helmet'
import Footer from './Footer'

const ApiMatchPath = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='matchPath' path='api/match-path/'/>
      <div className='container api-switch'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>matchPath</h1>
            <div className='page-section'>
              <h2 className='hdg-02'>Description</h2>
              <p className='txt-01'><C>matchPath</C> is a function that tells if the path of the first argument matches the path of the second argument by returning an object or null.</p>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Basic Usage</h2>
              <p className='txt-01'>Assume that you are on <C>/about</C> page.</p>
              <div className='code-01'>
                <CodeBlock filename='GlobalNav.jsx' lang='jsx'>
                  {`
import {matchPath} from 'react-queue-router'

const {pathname} = window.location
console.log(pathname) // /about

const matched01 = matchPath(pathname, '/about')
console.log(matched01)
// {
//   isExact: true,
//   params: {},
//   path: "/about",
//   url: "/about"
// }

const matched02 = matchPath(pathname, {path: '/about', exact: true}) // you can pass an object 
console.log(matched02)
// {
//   isExact: true,
//   params: {},
//   path: "/about",
//   url: "/about"
// }

const matched03 = matchPath(pathname, '/contact') // when unmatched, null will be returned 
console.log(matched03)
// null
                 `}
                </CodeBlock>
              </div>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Practical Example</h2>
              <p className='txt-01'><C>matchPath</C> is useful to implement a global navigation with the combination of <C>currentPath</C> or <C>nextPath</C>.</p>
              <p className='txt-01'>In the code below, <C>is-current</C> is added to <C>li</C> when <C>nextPath</C> matches.</p>
              <div className='code-01'>
                <CodeBlock filename='GlobalNav.jsx' lang='jsx'>
                  {`
import React, {useContext} from 'react'
import {RouterContext, matchPath, Link} from 'react-queue-router'

const GlobalNav = () => {
  const {nextPath} = useContext(RouterContext)
  
  return (
    <ul>
      <li className={matchPath(nextPath, '/') ? 'is-current' : ''}>
        <Link to='/'>Top page</Link>
      </li>
      <li className={matchPath(nextPath, '/about') ? 'is-current' : ''}>
        <Link to='/about'>About page</Link>
      </li>
    </ul>
  )
 }
 
export default GlobalNav
                `}
                </CodeBlock>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Fragment>
  )
}

export default ApiMatchPath
