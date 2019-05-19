import React, {Fragment} from 'react'
import {useTransition, Link} from '../QueueRouter/index'
import {leaveAnimation, enterAnimation} from './animation'
import Helmet from './Helmet'
import Footer from './Footer'

const Introduction = () => {
  useTransition(enterAnimation, leaveAnimation)
  return (
    <Fragment>
      <Helmet title='Introduction' path='introduction/'/>
      <div className='container'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>Introduction</h1>
            <div className='page-section'>
              <h2 className='hdg-02'>The problem</h2>
              <p className='txt-01'>When you develop a web app with React and implement url based routing, probably you use <a href="https://reacttraining.com/react-router/" target='_blank' rel='noopener noreferrer'>React Router</a>, which is well designed and very easy to use.</p>
              <p className='txt-01'>But when you try to add some animation to the transition from one route to another, you will figure out that React Router doesn't do the job.</p>
              <p className='txt-01'>Well, "entering" animation is implementable. (just do something when component is mounted.) But "leaving" ones are not because components bound to the path are unmounted immediately when the url is changed.</p>
              <p className='txt-01'>One solution is to use something like <a href="https://reactcommunity.org/react-transition-group/" target='_blank' rel='noopener noreferrer'>React Transition Group</a>. This package enables you to add some animation when components are switched by React Router.</p>
              <p className='txt-01'>However, I would say there are still two problems below.</p>
              <ol className='list-01'>
                <li><b>It's difficult to give unique animations to page to page.</b></li>
                <li><b>The animation will easily be erroneous when user hit another link before the ongoing transition animation ends.</b></li>
              </ol>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>The solution</h2>
              <p className='txt-01'><b>React Queue Router</b> is the solution to the problems above.</p>
              <p className='txt-01'>With this package,</p>
              <ul className='list-01'>
                <li><b>You can give different animations to page to page as you like.</b></li>
                <li><b>With the interface through that you manually control the end of transition animation, you no longer have to worry about the crash of animation.</b></li>
              </ul>
              <p className='txt-01'>See the core ideas in <Link to='/react-queue-router/feature/'>Feature</Link> page.</p>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Fragment>
  )
}

export default Introduction
