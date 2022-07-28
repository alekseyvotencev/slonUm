import React from 'react'
import logo from '../../img/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header__content'>
          <a href="/" className='header__logo-link'>
            <img src={logo} alt="" className='header__logo' />
          </a>
          <button className='header__btn-login'>
            Войти
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
