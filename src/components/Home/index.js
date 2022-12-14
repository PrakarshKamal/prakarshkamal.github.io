import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-p.png'
import AnimateLetters from '../AnimateLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letter, setLetter] = useState('text-animate')
  const name = 'rakarsh,'
  const title = 'software developer.'
  const nameArr = [...name]
  const titleArr = [...title]

  useEffect(() => {
    setTimeout(() => {
      setLetter('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letter}>H</span>
            <span className={`${letter} _17`}>i,</span>
            <br />
            <span className={`${letter} _18`}>I</span>
            <span className={`${letter} _19`}>'m</span>
            <img src={logo} alt="logo" />
            <AnimateLetters letter={letter} strArr={nameArr} idx={20} />
            <br />
            <AnimateLetters letter={letter} strArr={titleArr} idx={17} />
          </h1>
          <h2>Frontend Developer / Student / Learner</h2>
          <Link to="/contact" className="contact-me-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Home
