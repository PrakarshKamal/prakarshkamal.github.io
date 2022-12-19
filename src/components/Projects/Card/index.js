import React from 'react'
import './index.scss'

const Card = (props) => {
  return (
    <>
      {props.info.map((item, idx) => (
        <div className="card-container">
          <div className="cards" key={idx}>
            <div className="card-image-container">
              <img src={item.image} alt="" />
            </div>
            <div>
              <p className="card-title">{item.title}</p>
              <p className="card-description">{item.description}</p>
              <div className="card-links">
                <a href={item.link} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
