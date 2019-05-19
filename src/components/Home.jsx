import React, {Fragment} from 'react'
import {useTransition} from '../QueueRouter/index'
import {leaveAnimation, enterAnimation} from './animation'
import Helmet from './Helmet'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {prism as theme} from 'react-syntax-highlighter/dist/esm/styles/prism'
import logoImg from '../img/logo.svg'
import githubLogoImg from '../img/github-logo.svg'
import npmLogoImg from '../img/npm-logo.svg'

const Home = () => {
  useTransition(enterAnimation, leaveAnimation)
  const codeString = '$ npm install react-queue-router'

  return (
    <Fragment>
      <Helmet/>
      <div className='container'>
        <div className='container__inner'>
          <div className='page-wrapper home'>
            <h1 className='home__ttl'>
              <span>React Queue Router</span>
            </h1>
            <p className='home__lead'>Animation friendly router for React</p>
            <div className='home__code'>
              <SyntaxHighlighter language='bash' style={theme}>{codeString}</SyntaxHighlighter>
            </div>
            <div className='home__links'>
              <a className='home__links__github-logo' href='https://github.com/Tokky0425/react-queue-router' target='_blank' rel='noopener noreferrer'>
                <img src={githubLogoImg} alt=''/>
              </a>
              <a className='home__links__npm-logo' href='https://www.npmjs.com/package/react-queue-router/' target='_blank' rel='noopener noreferrer'>
                <img src={npmLogoImg} alt=''/>
              </a>
            </div>
            <img className='home__img' draggable='false' src={logoImg} alt=''/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
