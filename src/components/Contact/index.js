import React, { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import './index.scss'
import AnimateLetters from '../AnimateLetters'

const Contact = () => {
  const contact = 'Contact me'
  const contactArr = [...contact]

  const [letter, setLetter] = useState('text-animate')

  const contactFormRef = useRef()

  const sendEmail = (email) => {
    email.preventDefault()

    emailjs
      .sendForm(
        'service_bm5lo92',
        'contact_form',
        contactFormRef.current,
        'FhPhEFnTv05Wi4XBF'
      )
      .then(
        () => {
          alert('Your message has been sent!')
          window.location.reload()
        },
        () => {
          alert('Failed to send, please try again')
        }
      )
  }

  useEffect(() => {
    setTimeout(() => {
      setLetter('text-animate-hover')
    }, 3000)
  }, [])

  const position = [43.260263, -79.920421]

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="contact-me">
            <AnimateLetters letter={letter} strArr={contactArr} idx={15} />
          </h1>
          <p id="para-text">
            I am interested in software development / front-end positions. For
            any questions or to chat, feel free to use the form below to send me
            a message! ☕
          </p>
          <div className="contact-form">
            <form ref={contactFormRef} onSubmit={sendEmail}>
              <ul>
                <li className="half-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </li>
                <li className="half-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    required
                  />
                </li>
                <li>
                  <input
                    type="submit"
                    name="submit"
                    className="send-button"
                    value="Send"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-info">
          Prakarsh Kamal
          <br />
          Hamilton, ON
          <br />
          Canada
          <span>prakarshkamal@gmail.com</span>
        </div>
        <div className="map-container">
          <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Hello there! <br /> This map was created with react-leaflet.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Contact
