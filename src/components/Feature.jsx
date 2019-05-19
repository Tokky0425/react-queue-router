import React, {Fragment} from 'react'
import {useTransition} from '../QueueRouter/index'
import {leaveAnimation, enterAnimation} from './animation'
import Helmet from './Helmet'
import Footer from './Footer'
import cycleImg from '../img/feature_cycle.svg'

const Feature = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='Feature' path='feature/'/>
      <div className='container'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01'>Feature</h1>
            <div className='page-section'>
              <h2 className='hdg-02'>1. React-router-like routing</h2>
              <p className='txt-01'>Since many developers use React Router for routing of react applications, React Queue Router follows the basic interface of it, such as <b>&lt;Switch/&gt;</b>, <b>&lt;Route/&gt;</b> and <b>&lt;Link/&gt;</b>.</p>
              <p className='txt-01'>If you have an experience on React Router, you will get how to use it in a moment.</p>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>2. Transition animation without any constraints</h2>
              <p className='txt-01'>You are literary free from what kind of animation you implement.</p>
              <ul className='list-01'>
                <li>Wanna different animation between Top page and About page? <b>Fine.</b></li>
                <li>And these animations have different time duration? <b>No Problem.</b></li>
                <li>Haven't decided whether just adding classes to fire animation or using JS animation library like TweenMax? <b>Both work.</b></li>
              </ul>
            </div>
            <div className='page-section'>
              <h2 className='hdg-02'>3. Transition control by the "queue"</h2>
              <p className='txt-01'>As the name of the package shows, multiple transition plans cab be queued in the "history store" and will be released one by one. ("History store" is just an array that contains the string of URL path.)</p>
              <p className='txt-01'>You are responsible to let the "history store" know that the transition has end and it should "shift" the latest path to make the next one the latest, which in tern will trigger the next transition reactively.</p>
              <p className='txt-01'>Specifically, it has the cycle below.</p>
              <div className='img-01'>
                <img src={cycleImg} alt=''/>
              </div>
              <p className='txt-01'>"<b>History push</b>" is called when the url is changed. The path that the user is going to move is stored in the "history store".</p>
              <p className='txt-01'>"<b>Dispatch</b>" triggers the page transition. If "history store" has no path, it does nothing.</p>
              <p className='txt-01'>"<b>Leave end</b>" is the phase when current page's leaving is done. Then, current page's component will be unmounted and next page's component will be mounted.</p>
              <p className='txt-01'>"<b>Enter end</b>" is the phase when next page's entering is done. In this phase, the latest path in "history store" is deleted and then "dispatch" will be called.</p>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Fragment>
  )
}

export default Feature
