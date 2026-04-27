import React from 'react'
import Hero from './components/Hero/page'
import About from './components/About/page'
import Projects from './components/Projects/page'
import Skills from './components/Skills/page'
const Home = () => {
  return (
    <div className='min-h-screen'>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default Home