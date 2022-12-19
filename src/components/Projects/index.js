import React from 'react'
import Loader from 'react-loaders'

import './index.scss'
import Card from './Card'
import data from './Card/CardData'

const Project = () => {
  return (
    <>
      <div className="project-container">
        <Card info={data} />
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Project
