import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'
import AnimateLetters from '../AnimateLetters'
import python from '../../assets/images/python3.png'
import java from '../../assets/images/java-logo.png'
import resume from '../../content/resume.pdf'

const About = () => {
  const [letter, setLetter] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetter('text-animate-hover')
    }, 3000)
  }, [])

  const about = 'About me'
  const aboutArr = [...about]
  console.log(aboutArr)

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimateLetters letter={letter} strArr={aboutArr} idx={15} />
          </h1>
          <p>
            I am a 3rd year CS Student @McMaster University. Currenly I am
            working @
            <a
              className="work-link"
              href="https://www.venasolutions.com/"
              target="_blank"
              rel="noreferrer"
            >
              Vena Solutions
            </a>
            as a Software Developer Intern.
          </p>
          <p>
            I am a detail-oriented, resilient and creative individual who loves
            to solve complex problems.
          </p>
        </div>
        <div className="stage-cube-container">
          <div className="cube-spinner">
            <div className="face-1">
              {/* <FontAwesomeIcon icon={faJava} color="#ffff" /> */}
              <img src={java} alt="java" width={120} height={120} />
            </div>
            <div className="face-2">
              <FontAwesomeIcon icon={faReact} color="#00d8ff" />
            </div>
            <div className="face-3">
              <FontAwesomeIcon icon={faJsSquare} color="#f0db4f" />
            </div>
            <div className="face-4">
              {/* <FontAwesomeIcon icon={faPython} color="#306998" /> */}
              <img src={python} alt="python" width={120} height={120} />
            </div>
            <div className="face-5">
              <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
            </div>
            <div className="face-6">
              <FontAwesomeIcon icon={faCss3} color="#264de4" />
            </div>
          </div>
        </div>
        <div>
          <a
            className="resume-button"
            href={resume}
            target="_blank"
            type="pdf"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default About
