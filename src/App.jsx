import React from 'react'
import {QueueRouter, Switch, Route} from './QueueRouter/index'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import Introduction from './components/Introduction'
import Feature from './components/Feature'
import Usage from './components/Usage'
import NotFound from './components/NotFound'
import Example01 from './components/Example01'
import Example02 from './components/Example02'
import ApiQueueRouter from './components/ApiQueueRouter'
import ApiSwitch from './components/ApiSwitch'
import ApiRoute from './components/ApiRoute'
import ApiLink from './components/ApiLink'
import ApiUseTransition from './components/ApiUseTransition'
import ApiRouterContext from './components/ApiRouterContext'
import ApiMatchPath from './components/ApiMatchPath'

const App = () => {
  return (
    <QueueRouter>
      <div className='app'>
        <div className='side'>
          <div className='side__inner'>
            <Header/>
            <Nav/>
          </div>
        </div>
        <Switch>
          <Route path='/react-queue-router/' component={Home}/>
          <Route path='/react-queue-router/introduction' component={Introduction}/>
          <Route path='/react-queue-router/feature' component={Feature}/>
          <Route path='/react-queue-router/usage' component={Usage}/>
          <Route path='/react-queue-router/examples/1' component={Example01}/>
          <Route path='/react-queue-router/examples/2' component={Example02}/>
          <Route path='/react-queue-router/api/queue-router' component={ApiQueueRouter}/>
          <Route path='/react-queue-router/api/switch' component={ApiSwitch}/>
          <Route path='/react-queue-router/api/route' component={ApiRoute}/>
          <Route path='/react-queue-router/api/link' component={ApiLink}/>
          <Route path='/react-queue-router/api/use-transition' component={ApiUseTransition}/>
          <Route path='/react-queue-router/api/router-context' component={ApiRouterContext}/>
          <Route path='/react-queue-router/api/match-path' component={ApiMatchPath}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </QueueRouter>
  )
}

export default App
