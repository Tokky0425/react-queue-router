import React, {Fragment} from 'react'
import CodeBlock, {C} from './CodeBlock'
import {enterAnimation, leaveAnimation} from './animation'
import {useTransition} from '../QueueRouter'
import Helmet from './Helmet'
import Footer from './Footer'

const ApiQueueRouter = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='&lt;QueueRouter/&gt;' path='api/queue-router/'/>
      <div className='container api-queue-router'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>&lt;QueueRouter/&gt;</h1>
            <div className='page-section'>
              <h2 className='hdg-02'>Description</h2>
              <p className='txt-01'><C>&lt;QueueRouter/&gt;</C> component is a wrapper component that enables descendant components to use React Queue Router's API.</p>
              <p className='txt-01'>It should be one of the top level components of your app.</p>
              <p className='txt-01'>It should not be unmounted once it mounted because it will make a reference with <C>history.listen</C> and unmount possibly might cause memory leak.</p>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>Basic Usage</h2>
              <p className='txt-01'><C>&lt;QueueRouter/&gt;</C> component always comes with <C>&lt;Switch/&gt;</C> component as its descendant.</p>
              <div className='code-01'>
                <CodeBlock filename='App.jsx' lang='jsx'>
                  {`
import React from 'react'
import {QueueRouter, Switch} from 'react-queue-router'

const App = () => {
  return (
    <QueueRouter>
      <Switch>
        {/* content */}
      </Switch>
    </QueueRouter>
  )
 }
 
export default App
                `}
                </CodeBlock>
              </div>
            </div>

            <div className='page-section'>
              <h2 className='hdg-02'>Another Case</h2>
              <p className='txt-01'><C>&lt;Switch/&gt;</C> component does not have to be a direct child.</p>
              <div className='code-01'>
                <CodeBlock filename='App.jsx' lang='jsx'>
                  {`
import React from 'react'
import {QueueRouter, Switch} from 'react-queue-router'

const App = () => {
  // This is valid.
  return (
    <QueueRouter>
      <div className='container'>
        <Switch>
          {/* content */}
        </Switch>
      </div>
    </QueueRouter>
  )
 }
 
export default App
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

export default ApiQueueRouter
