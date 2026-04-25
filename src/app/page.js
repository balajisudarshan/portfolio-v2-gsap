import React from 'react'
import Hero from './components/Hero/page'
import About from './components/About/page'
const Home = () => {
  return (
    <div className='min-h-screen'>
      <Hero/>
      <About/>
    </div>
  )
}

export default Home