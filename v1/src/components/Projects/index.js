import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import './index.scss'
import AnimateLetters from '../AnimateLetters'
import projectData from '../../data/projectData.json'

const Project = () => {
  const project = 'Projects'
  const projecctArr = [...project]
  const [letterClass, setLetterClass] = useState('text-animate')

  console.log(projectData)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  })

  const renderProjects = (project) => {
    return (
      <div className="images-container">
        {project.map((item, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={item.image} alt="project" className="project-image" />
              <div className="content">
                <h3 className="title">{item.title}</h3>
                <h4 className="description">{item.description}</h4>
                <button
                  className="button"
                  onClick={() => window.open(item.link)}
                >
                  GitHub
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container project-page">
        <h1 className="page-title">
          <AnimateLetters letter={letterClass} strArr={projecctArr} idx={15} />
        </h1>
        <div>{renderProjects(projectData.project)}</div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Project
