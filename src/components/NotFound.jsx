import React from 'react'
import {useTransition} from '../QueueRouter/index'
import {leaveAnimation, enterAnimation} from './animation'
import Footer from './Footer'

const NotFound = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <div className='container'>
      <div className='container__inner'>
        <div className='page-wrapper not-found'>
          <h1 className='hdg-01 not-found__ttl'>404 Not Found</h1>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default NotFound
