import React, {Fragment} from 'react'
import CodeBlock, {C} from './CodeBlock'
import {enterAnimation, leaveAnimation} from './animation_example01'
import {useTransition} from '../QueueRouter'
import Helmet from './Helmet'
import Footer from './Footer'

const Example01 = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='Animation Example01' path='examples/1/'/>
      <div className='container example01'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <div className='example01__inner'>
              <h1 className='hdg-01'>Example01</h1>
              <div className='page-section'>
                <p className='txt-01'>In Example01 (the page you are seeing now), the animation is implemented by JavaScript using <a href="https://greensock.com/gsap" target='_blank' rel='noopener noreferrer'>GSAP</a>.</p>
                <p className='txt-01'>TweenLite has <C>onComplete</C> property, where <C>release</C> should be called.</p>
                <div className='code-01'>
                  <CodeBlock filename='animationExample01.js' lang='javascript'>
                    {`
import TweenLite, {Power3} from 'gsap'
import TimelineLite from 'gsap/TimelineLite'

export const enterAnimation = ({release}) => {
  const inner = document.querySelector('.example01__inner')
  const cover = document.querySelector('.example01__cover')
  const itemArr = Array.from(cover.querySelectorAll('.example01__cover__item'))

  new TimelineLite()
    .to(cover, .8, {
      opacity: '1'
    })
    .to(inner, 0, {
      opacity: 1,
      onComplete: () => {
        itemArr.forEach((item, index) => {
          TweenLite.to(item, 1, {
            ease: Power3.easeInOut,
            x: '100%',
            delay: index * 0.05,
            onComplete: () => {
              if (index + 1 === itemArr.length) {
                cover.style.display = 'none'
                release() // This will be called when the animation ends
              }
            }
          })
        })
      }
    })
}

export const leaveAnimation = ({release}) => {
  const inner = document.querySelector('.example01__inner')
  TweenLite.to(inner, .3, {
    opacity: 0,
    onComplete: () => {
      release() // This will be called when the animation ends
    }
  })
}
                  `}
                  </CodeBlock>
                </div>

                <p className='txt-01'>There is nothing special in the Example01 component, except for using <C>useTransition</C>. (The below is not full code.)</p>
                <div className='code-01'>
                  <CodeBlock filename='Example01.jsx' lang='jsx'>
                    {`
import React from 'react'
import {enterAnimation, leaveAnimation} from './animation_example01'
import {useTransition} from 'react-queue-router'

const Example01 = () => {
  useTransition(enterAnimation, leaveAnimation)
  
  return (
    <div className='example01'>
      <div className='example01__inner'>
        {/* content */}
      </div>
      <div className='example01__cover'>
        <span className='example01__cover__item'/>
        <span className='example01__cover__item'><span>Example01</span></span>
        <span className='example01__cover__item'><span>Example01</span></span>
        <span className='example01__cover__item'/>
      </div>
    </div>
  )
}

export default Example01
                  `}
                  </CodeBlock>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>

        <div className='example01__cover'>
          <span className='example01__cover__item'/>
          <span className='example01__cover__item'><span>Example01</span></span>
          <span className='example01__cover__item'><span>Example01</span></span>
          <span className='example01__cover__item'/>
        </div>
      </div>
    </Fragment>
  )
}

export default Example01
