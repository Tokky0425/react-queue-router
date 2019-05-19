import React, {Fragment} from 'react'
import CodeBlock, {C} from './CodeBlock'
import {enterAnimation, leaveAnimation} from './animation'
import {useTransition} from '../QueueRouter'
import Helmet from './Helmet'
import Footer from './Footer'
import cycleImg from '../img/api-router-context_cycle.svg'

const ApiRouterContext = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='RouterContext' path='api/router-context/'/>
      <div className='container api-switch'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>RouterContext</h1>
            <div className='page-section'>
              <h2 className='hdg-02'>Description</h2>
              <p className='txt-01'><C>RouterContext</C> is a React context from that you can access the <C>currentPath</C> and <C>nextPath</C>.</p>
              <p className='txt-01'>It can be used only in descendant components of <C>&lt;QueRouter/&gt;</C>.</p>
              <p className='txt-01'><C>&lt;Route/&gt;</C> component's mount is based on <C>currentPath</C>.</p>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Basic Usage</h2>
              <div className='code-01'>
                <CodeBlock filename='SomePageComponent.jsx' lang='jsx'>
                  {`
import React, {useContext} from 'react'
import {RouterContext} from 'react-queue-router'

const SomePageComponent = () => {
  const {currentPath, nextPath} = useContext(RouterContext)
  
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
              <h2 className='hdg-02'>Cycle of <C>currentPath</C> and <C>nextPath</C></h2>
              <p className='txt-01'>Assume that you are currently on Top page (<C>&lt;Top/&gt;</C>) and hit the link to About page (<C>&lt;About/&gt;</C>).</p>
              <p className='txt-01'>Then, <C>currentPath</C> and <C>nextPath</C> will be updated like this.</p>
              <div className='img-01'>
                <img src={cycleImg} alt=''/>
              </div>
              <p className='txt-01'>As you see above, when you hit the link, <C>nextPath</C> changes first.</p>
              <p className='txt-01'>The change of <C>nextPath</C> induces the leave animation of currently mounted component. And, of course, you call <C>release</C> to tell the router the end of the animation.</p>
              <p className='txt-01'>After the end of the leave animation, <C>currentPath</C> in turn will be updated immediately, which switches the mounted component.</p>
              <p className='txt-01'>When the new component is mounted, the enter animation will be fired. After <C>release</C> is called, the router will get ready for the next transition.</p>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Fragment>
  )
}

export default ApiRouterContext
