import React, {Fragment, useContext} from 'react'
import {RouterContext, matchPath, Link} from '../QueueRouter/index'
import githubLogoImg from '../img/github-logo.svg'
import npmLogoImg from '../img/npm-logo.svg'

const Nav = () => {
  const {nextPath} = useContext(RouterContext)

  return (
    <Fragment>
      <nav className='nav'>
        <div className='nav__inner'>
          <ul className='nav__list'>
            <li className={matchPath(nextPath, '/react-queue-router/guides') ? 'is-current' : ''}>
              <span>Guides</span>
              <ul>
                <li className={matchPath(nextPath, '/react-queue-router/introduction') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/introduction/'>Introduction</Link>
                </li>
                <li className={matchPath(nextPath, '/react-queue-router/feature') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/feature/'>Feature</Link>
                </li>
                <li className={matchPath(nextPath, '/react-queue-router/usage') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/usage/'>Usage</Link>
                </li>
              </ul>
            </li>
            <li className={matchPath(nextPath, '/react-queue-router/examples') ? 'is-current' : ''}>
              <span>Animation Examples</span>
              <ul>
                <li className={matchPath(nextPath, '/react-queue-router/examples/1') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/examples/1/'>Example01</Link>
                </li>
                <li className={matchPath(nextPath, '/react-queue-router/examples/2') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/examples/2/'>Example02</Link>
                </li>
              </ul>
            </li>
            <li className={matchPath(nextPath, '/react-queue-router/api') ? 'is-current' : ''}>
              <span>API</span>
              <ul>
                <li className={matchPath(nextPath, '/react-queue-router/api/queue-router') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/api/queue-router/'>&lt;QueueRouter/&gt;</Link>
                </li>
                <li className={matchPath(nextPath, '/react-queue-router/api/switch') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/api/switch/'>&lt;Switch/&gt;</Link>
                </li>
                <li className={matchPath(nextPath, '/react-queue-router/api/route') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/api/route/'>&lt;Route/&gt;</Link>
                </li>
                <li className={matchPath(nextPath, '/react-queue-router/api/link') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/api/link/'>&lt;Link/&gt;</Link>
                </li>
                <li className={matchPath(nextPath, '/react-queue-router/api/use-transition') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/api/use-transition/'>useTransition</Link>
                </li>
                <li className={matchPath(nextPath, '/react-queue-router/api/router-context') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/api/router-context/'>RouterContext</Link>
                </li>
                <li className={matchPath(nextPath, '/react-queue-router/api/match-path') ? 'is-current' : ''}>
                  <Link to='/react-queue-router/api/match-path/'>matchPath</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className='nav__links'>
            <a className='nav__links__github' href='https://github.com/Tokky0425/react-queue-router' target='_blank' rel='noopener noreferrer'>
              <img src={githubLogoImg} alt=''/>
            </a>
            <a className='nav__links__npm' href='https://www.npmjs.com/package/react-queue-router/' target='_blank' rel='noopener noreferrer'>
              <img src={npmLogoImg} alt=''/>
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Nav
