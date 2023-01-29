import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" index element={<About />} />
          <Route path="projects" index element={<Projects />} />
          <Route path="contact" index element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
