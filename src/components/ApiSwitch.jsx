import React, {Fragment} from 'react'
import CodeBlock, {C} from './CodeBlock'
import {enterAnimation, leaveAnimation} from './animation'
import {useTransition, Link} from '../QueueRouter'
import Helmet from './Helmet'
import Footer from './Footer'

const ApiSwitch = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='&lt;Switch/&gt;' path='api/switch/'/>
      <div className='container api-switch'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>&lt;Switch/&gt;</h1>
            <div className='page-section'>
              <h2 className='hdg-02'>Description</h2>
              <p className='txt-01'><C>&lt;Switch/&gt;</C> component is a component that decides which component should be mounted based on <C>currentPath</C>. (See <Link to='/react-queue-router/api/router-context/'>RouterContext</Link> page.)</p>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Basic Usage</h2>
              <p className='txt-01'><C>&lt;Switch/&gt;</C> takes only <C>&lt;Route/&gt;</C> components as its children.</p>
              <div className='code-01'>
                <CodeBlock filename='SwitchExample.jsx' lang='jsx'>
                  {`
import React from 'react'
import {Switch, Router} from 'react-queue-router'

import Top from './Top'
import About from './About'
import NotFound from './NotFound'

const SwitchExample = () => {
  return (
    <Switch>
      <Router path='/' component='Top'>
      <Router path='/about' component='About'>
      <Router component='NotFound'>
    </Switch>
  )
 }
 
export default SwitchExample
                `}
                </CodeBlock>
              </div>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Options</h2>
              <div className='table-01'>
                <table>
                  <thead>
                  <tr>
                    <th>Property</th>
                    <th>Type of value</th>
                    <th>Default value</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><C>rememberScroll</C></td>
                    <td><C>Boolean</C></td>
                    <td><C>false</C></td>
                    <td>-</td>
                    <td>
                      <p><span className='caution'>Experimental</span></p>
                      <p>When true, scroll position will be stored and you can come back to the right position when hitting "back" button or "forward" button.</p>
                      <p>This is an experimental feature. All cases are not supported.</p>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Fragment>
  )
}

export default ApiSwitch
