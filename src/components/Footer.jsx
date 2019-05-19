import React from 'react'
import logoImg from '../img/logo.svg'
import githubLogoImg from '../img/github-logo.svg'
import npmLogoImg from '../img/npm-logo.svg'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__inner'>
      <div className='footer__img-set'>
        <a className='footer__img-set__github' href='https://github.com/Tokky0425/react-queue-router' target='_blank' rel='noopener noreferrer'>
          <img src={githubLogoImg} alt=''/>
        </a>
        <a className='footer__img-set__npm' href='https://www.npmjs.com/package/react-queue-router/' target='_blank' rel='noopener noreferrer'>
          <img src={npmLogoImg} alt=''/>
        </a>
      </div>
      <img className='footer__logo' src={logoImg} draggable='false' alt=''/>
      <p className='footer__ttl'>React Queue Router</p>
      <p className='footer__licence'>MIT &copy; <a href='https://github.com/Tokky0425' target='_blank' rel='noopener noreferrer'>Masakatsu Tokita</a></p>
    </div>
  </footer>
)

export default Footer
