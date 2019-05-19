import React, {Fragment} from 'react'
import {useTransition} from '../QueueRouter/index'
import {enterAnimation, leaveAnimation} from './animation'
import Helmet from './Helmet'
import CodeBlock, {C} from './CodeBlock'
import Footer from './Footer'

const Usage = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='Usage' path='usage/'/>
      <div className='container'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>Usage</h1>

            <div className='page-section'>
              <h2 className='hdg-02'>Installation</h2>
              <CodeBlock lang='bash'>
                {`
$ npm install react-queue-router
                `}
              </CodeBlock>
            </div>

            <div className='page-section'>
              <h2 className='hdg-02'>Create a simple routing</h2>
              <p className='txt-01'>Let's assume you have 3 pages (Top, About and 404) on your web site.</p>
              <div className='code-01'>
                <CodeBlock filename='App.jsx' lang='jsx'>
                  {`
import React from 'react'
import ReactDOM from 'react-dom'
import {QueueRouter, Switch, Route} from 'react-queue-router'

import Top from './Top'
import About from './About'
import NotFound from './NotFound'

const App = () => {
  return (
    <QueueRouter>
      <Switch>
        <Route path='/' component={Top}/>
        <Route path='/about' component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </QueueRouter>
  )
 }
 
ReactDOM.render(<App/>, document.getElementById('root'))
                `}
                </CodeBlock>
              </div>
              <div className='code-01'>
                <CodeBlock filename='Top.jsx' lang='jsx'>
                  {`
import React from 'react'
import {useTransition} from 'react-queue-router'

const Top = () => {
  useTransition()
  
  return <h1>Hello, React Queue Router!</h1>
}

export default Top
                `}
                </CodeBlock>
              </div>
              <div className='code-01'>
                <CodeBlock filename='About.jsx' lang='jsx'>
                  {`
import React from 'react'
import {useTransition} from 'react-queue-router'

const About = () => {
  useTransition()
  
  return <h1>Hello, About page!</h1>
}

export default About
                `}
                </CodeBlock>
              </div>
              <div className='code-01'>
                <CodeBlock filename='NotFound.jsx' lang='jsx'>
                  {`
import React from 'react'
import {useTransition} from 'react-queue-router'

const NotFound = () => {
  useTransition()
  
  return <h1>404 Page Not Found</h1>
}

export default NotFound
                `}
                </CodeBlock>
              </div>
              <p className='txt-01'>This is all enough to give routing in the app.</p>
            </div>

            <div className='page-section'>
              <h2 className='hdg-02'>Add transition animation</h2>
              <p className='txt-01'>If you want to give animations, for example, to the <C>Top page</C>,
                you add <C>animation.js</C> and tweak <C>Top.jsx</C> like below.</p>
              <div className='code-01'>
                <CodeBlock filename='animation.js' lang='javascript'>
                  {`
export const enterAnimation = ({release}) => {
  // Do your fancy animation here.
  // When everything is done, call "release".
  release()
}

export const leaveAnimation = ({release}) => {
  // Do your fancy animation here.
  // When everything is done, call "release".
  release()
}
                `}
                </CodeBlock>
              </div>
              <div className='code-01'>
                <CodeBlock filename='Top.jsx' lang='jsx'>
                  {`
import React from 'react'
import {useTransition} from 'react-queue-router'
import {enterAnimation, leaveAnimation} from './animation' // added

const Top = () => {
  useTransition(enterAnimation, leaveAnimation) // modified
  
  return <h1>Hello, React Queue Router!</h1>
}

export default Top
              `}
                </CodeBlock>
              </div>
              <p className='txt-01'>The hook <C>useTransition</C> takes functions for leaving and entering as its argument.</p>
              <p className='txt-01'>In both animation functions, <C>release</C> needs to be called after all animations are done.</p>
            </div>

            <div className='page-section'>
              <h2 className='hdg-02'>Add link</h2>
              <p className='txt-01'>Then, add <C>Nav.jsx</C>. You can use <C>Link</C> component.</p>
              <div className='code-01'>
                <CodeBlock filename='Nav.jsx' lang='jsx'>
                  {`
import React from 'react'
import {Link} from 'react-queue-router'

const Nav = () => {  
  return (
    <nav>
      <Link to='/'>Top</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default Nav
                `}
                </CodeBlock>
              </div>
              <p className='txt-01'>Import it in <C>App.jsx</C>.</p>
              <div className='code-01'>
                <CodeBlock filename='App.jsx' lang='jsx'>
                  {`
import React from 'react'
import ReactDOM from 'react-dom'
import {QueueRouter, Switch, Route} from 'react-queue-router'

import Top from './Top'
import About from './About'
import NotFound from './NotFound'
import Nav from './Nav' // added

const App = () => {
  return (
    <QueueRouter>
      <Nav/> {/* added */}
      <Switch>
        <Route path='/' component={Top}/>
        <Route path='/about' component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </QueueRouter>
  )
 }
 
ReactDOM.render(<App/>, document.getElementById('root'))
                `}
                </CodeBlock>
              </div>
            </div>

            <div className='page-section'>
              <p className='txt-01'>For more details, see API section.</p>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Fragment>
  )
}

export default Usage
