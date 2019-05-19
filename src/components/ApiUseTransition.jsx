import React, {Fragment} from 'react'
import CodeBlock, {C} from './CodeBlock'
import {enterAnimation, leaveAnimation} from './animation'
import {useTransition} from '../QueueRouter'
import Helmet from './Helmet'
import Footer from './Footer'

const ApiUseTransition = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='useTransition' path='api/use-transition/'/>
      <div className='container api-switch'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>useTransition</h1>
            <div className='page-section'>
              <h2 className='hdg-02'>Description</h2>
              <p className='txt-01'><C>useTransition</C> is a hook that tells Queue Router the end of transition animation.</p>
              <p className='txt-01'>You need to use <C>useTransition</C> in every component that is passed to <C>&lt;Route/&gt;</C> component.</p>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Basic Usage</h2>
              <p className='txt-01'>When just calling <C>useTransition</C>, the transition finishes instantly without any trainstion animation. (In this way, routing works almost same as React Router.)</p>
              <div className='code-01'>
                <CodeBlock filename='SomePageComponent.jsx' lang='jsx'>
                  {`
import React from 'react'
import {useTransition} from 'react-queue-router'

const SomePageComponent = () => {
  useTransition()
  
  return (
    <div>
      {/* some content */}
    </div>
  )
 }
 
export default SomePageComponent
                `}
                </CodeBlock>
              </div>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Adding transition animation</h2>
              <p className='txt-01'>If you want to add transition animation, you can pass function as its arguments. The first argument is for the animation for entering, and the second is for leaving.</p>
              <p className='txt-01'>When you pass your functions, you <b>MUST</b> call <C>release</C> inside them. The app will crush otherwise.</p>
              <p className='txt-01'>Function for entering will be called only once when the component mounted.</p>
              <div className='code-01'>
                <CodeBlock filename='SomePageComponent.jsx' lang='jsx'>
                  {`
import React from 'react'
import {useTransition} from 'react-queue-router'

const enterAnimation = ({release}) => {
  // Do your fancy animation here.
  // When everything is done, call "release".
  release()
}

const leaveAnimation = ({release}) => {
  // Do your fancy animation here.
  // When everything is done, call "release".
  release()
}

const SomePageComponent = () => {
  useTransition(enterAnimation, leaveAnimation)
  
  return (
    <div>
      {/* some content */}
    </div>
  )
 }
 
export default SomePageComponent
                `}
                </CodeBlock>
              </div>
              <p className='txt-01'>The codes below are equivalent to the above. Choose the one you like.</p>
              <div className='code-01'>
                <CodeBlock filename='SomePageComponent.jsx' lang='jsx'>
                  {`
import React from 'react'
import {useTransition} from 'react-queue-router'

const SomePageComponent = () => {
  useTransition(
    ({release}) => {
      // Do your fancy animation here.
      // When everything is done, call "release".
      release()
    },
    ({release}) => {
      // Do your fancy animation here.
      // When everything is done, call "release".
      release()
    }
  )
  
  return (
    <div>
      {/* some content */}
    </div>
  )
 }
 
export default SomePageComponent
                `}
                </CodeBlock>
              </div>
              <div className='code-01'>
                <CodeBlock filename='SomePageComponent.jsx' lang='jsx'>
                  {`
import React from 'react'
import {useTransition} from 'react-queue-router'

const enterAnimation = ({release}) => {
  return new Promise(resolve => {
    // Do your fancy animation here.
    // When everything is done, call "resolve".
    resolve()
  })
}

const leaveAnimation = ({release}) => {
  return new Promise(resolve => {
    // Do your fancy animation here.
    // When everything is done, call "resolve".
    resolve()
  })
}

const SomePageComponent = () => {
  useTransition(
    async ({release}) => {
      await enterAnimation()
      release()
    },
    async ({release}) => {
      await leaveAnimation()
      release()
    }
  )
  
  return (
    <div>
      {/* some content */}
    </div>
  )
 }
 
export default SomePageComponent
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

export default ApiUseTransition
