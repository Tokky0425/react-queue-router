import React, {Fragment} from 'react'
import CodeBlock, {C} from './CodeBlock'
import {enterAnimation, leaveAnimation} from './animation'
import {Link, useTransition} from '../QueueRouter'
import Helmet from './Helmet'
import Footer from './Footer'

const ApiLink = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='&lt;Link/&gt;' path='api/link/'/>
      <div className='container api-switch'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>&lt;Link/&gt;</h1>
            <div className='page-section'>
              <h2 className='hdg-02'>Description</h2>
              <p className='txt-01'><C>&lt;Link/&gt;</C> component is used to navigate to other route inside <C>&lt;Switch/&gt;</C> component.</p>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Basic Usage</h2>
              <div className='code-01'>
                <CodeBlock filename='LinkExample.jsx' lang='jsx'>
                  {`
import React from 'react'
import {Link} from 'react-queue-router'

const LinkExample = () => {
  return (
    <nav>
      <Link to='/'>Top</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
 }
 
export default LinkExample
                `}
                </CodeBlock>
              </div>
              <p className='txt-01'>When you click <C>&lt;Link/&gt;</C>, it implements <C>history.push</C> inside.</p>
              <p className='txt-01'>Note that if the value of <C>to</C> is equivalent to the <C>currentPath</C>, <C>&lt;Link/&gt;</C> does <b>NOT</b> fire <C>history.push</C>.</p>
              <p className='txt-01'>About <C>currentPath</C>, see <Link to='/react-queue-router/api/router-context/'>RouterContext</Link> page.</p>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Fragment>
  )
}

export default ApiLink
