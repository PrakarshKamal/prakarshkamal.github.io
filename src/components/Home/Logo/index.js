import React from 'react'
import './index.scss'
import logoP from '../../../assets/images/logo-p.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoP} className="img solid-logo" alt="logoP" />
    </div>
  )
}

export default Logo
