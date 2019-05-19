import React, {Fragment} from 'react'
import CodeBlock, {C} from './CodeBlock'
import {enterAnimation, leaveAnimation} from './animation_example02'
import {useTransition, Link} from '../QueueRouter'
import Helmet from './Helmet'
import Footer from './Footer'
import logoImg from '../img/logo.svg'

const Example02 = () => {
  useTransition(enterAnimation, leaveAnimation)

  return (
    <Fragment>
      <Helmet title='Animation Example02' path='examples/2/'/>
      <div className='container example02'>
        <div className='container__inner'>
          <div className='page-wrapper'>
            <h1 className='hdg-01 example02__ttl'>Example02</h1>
            <div className='page-section page-section--full'>
              <div className='img-01 example02__character'>
                <img src={logoImg} alt=''/>
              </div>
            </div>
            <div className='page-section example02__content'>
              <p className='txt-01'>In Example02, CSS animation is used for the character's entering and leaving motion of this page.</p>
              <p className='txt-01'>Check out that <C>animationend</C> is used to detect the end of CSS animation.</p>
              <div className='code-01'>
                <CodeBlock filename='animation_example02.js' lang='javascript'>
                  {`
export const enterAnimation = ({release}) => {
  const ttl = document.querySelector('.example02__ttl')
  const character = document.querySelector('.example02__character')
  const imgEle = character.querySelector('img')
  const content = document.querySelector('.example02__content')

  const func = () => {
    imgEle.removeEventListener('animationend', func)
    release() // This will be called when the animation ends
  }
  imgEle.addEventListener('animationend', func)

  character.classList.add('is-entering') // Fire CSS animation by adding class
  ttl.classList.add('is-visible')
  content.classList.add('is-visible')
}

export const leaveAnimation = ({release}) => {
  const ttl = document.querySelector('.example02__ttl')
  const character = document.querySelector('.example02__character')
  const content = document.querySelector('.example02__content')

  const func = () => {
    character.removeEventListener('animationend', func)
    release() // This will be called when the animation ends
  }
  character.addEventListener('animationend', func)

  character.classList.add('is-leaving') // Fire CSS animation by adding class
  ttl.classList.remove('is-visible')
  content.classList.remove('is-visible')
}
                `}
                </CodeBlock>
              </div>

              <p className='txt-01'>Like <Link to='/react-queue-router/examples/1/'>Example01</Link>, using <C>useTransition</C> is the only point for the Example02 component. (The below is not full code.)</p>
              <div className='code-01'>
                <CodeBlock filename='Example02.jsx' lang='jsx'>
                  {`
import React from 'react'
import {enterAnimation, leaveAnimation} from './animation_example01'
import {useTransition} from 'react-queue-router'

const Example02 = () => {
  useTransition(enterAnimation, leaveAnimation)
  
  return (
    <div className='example02'>
      <h1 className='example02__ttl'>Example02</h1>
      <div className='example02__character'>
        <img src='/img/logo.svg' alt=''/>
      </div>
      <div className='example02__codes'>
        {/* content */}
      </div>
    </div>
  )
}

export default Example02
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

export default Example02
