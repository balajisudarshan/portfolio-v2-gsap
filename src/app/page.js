import React from 'react'
import Hero from './components/Hero/page'
import About from './components/About/page'
import Projects from './components/Projects/page'
const Home = () => {
  return (
    <div className='min-h-screen'>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}

export default Home