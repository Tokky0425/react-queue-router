import React, {useContext} from 'react'
import {Link, RouterContext} from '../QueueRouter'
import logoImg from '../img/logo.svg'
import {toggleMenu} from './menuHandler'

const Header = () => {
  const {currentPath} = useContext(RouterContext)

  return (
    <header className={`header ${currentPath === '/react-queue-router/' ? 'is-home' : ''}`}>
      <div className='header__inner'>
        <Link to='/react-queue-router/'>
          <img className='header__logo' src={logoImg} alt=''/>
          <h1 className='header__ttl'>React Queue Router</h1>
        </Link>
      </div>
      <button className='header__menu-btn' onClick={toggleMenu}>
        <span/>
        <span/>
        <span/>
      </button>
    </header>
  )
}

export default Header
