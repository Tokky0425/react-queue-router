import React, {Fragment} from 'react'
import CodeBlock, {C} from './CodeBlock'
import {enterAnimation, leaveAnimation} from './animation'
import {Link, useTransition} from '../QueueRouter'
import Helmet from './Helmet'
import Footer from './Footer'

const ApiRoute = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='&lt;Route/&gt;' path='api/route/'/>
      <div className='container api-switch'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>&lt;Route/&gt;</h1>
            <div className='page-section'>
              <h2 className='hdg-02'>Description</h2>
              <p className='txt-01'><C>&lt;Route/&gt;</C> component is an only child component that <C>&lt;Switch/&gt;</C> can take.</p>
              <p className='txt-01'><C>&lt;Route/&gt;</C> itself does not do anything special inside. This is used to provide the common interface for <C>&lt;Switch/&gt;</C>.</p>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Basic Usage</h2>
              <p className='txt-01'><C>&lt;Route/&gt;</C> has to be used as a direct child of <C>&lt;Switch/&gt;</C> component.</p>
              <div className='code-01'>
                <CodeBlock filename='RouteExample.jsx' lang='jsx'>
                  {`
import React from 'react'
import {Switch, Route} from 'react-queue-router'

import Top from './Top'
import About from './About'
import NotFound from './NotFound'

const RouteExample = () => {
  return (
    <Switch>
      <Route path='/' component='Top'>
      <Route path='/about' component='About'>
      <Route component='NotFound'>
    </Switch>
  )
 }
 
export default RouteExample
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
                    <td><C>path</C></td>
                    <td><C>String</C></td>
                    <td>-</td>
                    <td>required</td>
                    <td>Component will be mounted when the given path matches the <C>currentPath</C>. If <C>path</C> is not set, the route always matches. Matching is implemented from top to bottom, and only one route can match at a time.</td>
                  </tr>
                  <tr>
                    <td><C>component</C></td>
                    <td><C>React Component</C></td>
                    <td>-</td>
                    <td>required</td>
                    <td>Feed a component you want to show.</td>
                  </tr>
                  <tr>
                    <td><C>exact</C></td>
                    <td><C>Boolean</C></td>
                    <td><C>true</C></td>
                    <td>-</td>
                    <td>When <C>true</C>, the given path will match the end of the string of <C>currentPath</C>.<br/>See the <a href='#route-match-pattern'>route match pattern</a> below.</td>
                  </tr>
                  <tr>
                    <td><C>strict</C></td>
                    <td><C>Boolean</C></td>
                    <td><C>false</C></td>
                    <td>-</td>
                    <td>When <C>true</C> with the combination of <C>exact</C>, it enforces strict matching of trailing slashes.<br/>See the <a href='#route-match-pattern'>route match pattern</a> below.</td>
                  </tr>
                  <tr>
                    <td><C>sensitive</C></td>
                    <td><C>Boolean</C></td>
                    <td><C>false</C></td>
                    <td>-</td>
                    <td>When <C>true</C>, matching will be case sensitive.</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <p className='txt-01'>About <C>currentPath</C>, see <Link to='/react-queue-router/api/router-context/'>RouterContext</Link> page.</p>
              <h3 className='hdg-03' id='route-match-pattern'>Route match pattern</h3>
              <div className='table-01'>
                <table>
                  <thead>
                  <tr>
                    <th>path</th>
                    <th>location.pathname</th>
                    <th>exact</th>
                    <th>strict</th>
                    <th>Matches?</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr><td>/one/two</td><td>/one/two/</td><td><C>false</C></td><td><C>false</C></td><td><span role='img' aria-label='matched'>✔</span></td></tr>
                  <tr><td>/one/two</td><td>/one/two/</td><td><C>true</C></td><td><C>false</C></td><td><span role='img' aria-label='matched'>✔</span></td></tr>
                  <tr><td>/one/two</td><td>/one/two/</td><td><C>false</C></td><td><C>true</C></td><td><span role='img' aria-label='matched'>✔</span></td></tr>
                  <tr><td>/one/two</td><td>/one/two/</td><td><C>true</C></td><td><C>true</C></td><td><span role='img' aria-label='unmatched'>❌</span></td></tr>
                  <tr><td>/one/two/</td><td>/one/two</td><td><C>false</C></td><td><C>false</C></td><td><span role='img' aria-label='unmatched'>❌</span></td></tr>
                  <tr><td>/one/two/</td><td>/one/two</td><td><C>true</C></td><td><C>false</C></td><td><span role='img' aria-label='unmatched'>❌</span></td></tr>
                  <tr><td>/one/two/</td><td>/one/two</td><td><C>false</C></td><td><C>true</C></td><td><span role='img' aria-label='unmatched'>❌</span></td></tr>
                  <tr><td>/one/two/</td><td>/one/two</td><td><C>true</C></td><td><C>true</C></td><td><span role='img' aria-label='unmatched'>❌</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='page-section'>
              <h2 className='hdg-02'>Handle 404 page</h2>
              <p className='txt-01'>As you see in Basic Usage example, you can handle 404 page by giving a <C>&lt;Route/&gt;</C> component without <C>path</C>.</p>
              <p className='txt-01'>Since the <C>&lt;Route/&gt;</C> component without <C>path</C> matches any <C>currentPath</C>, you need to place it at the last.</p>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Fragment>
  )
}

export default ApiRoute
