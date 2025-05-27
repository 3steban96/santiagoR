import React from 'react'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'
import NavBar from './components/NavBar/NavBar'

export default function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <AboutMe/>
      <Project/>
      <Contact/>
    </>
  )
}
