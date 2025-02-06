import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Program from './components/Services'
import Title from './components/Title'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
    <Hero/>
    <div className='container'>
      <Title subtitle='Our Services' title='We are specialized in'/>
    <Program/>
    <About/>
    <Title subtitle='Testimonial' title='What our clients says'/>
    <Testimonial/>
    <Title subtitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Footer/>
    </div>
  
   
    </div>
  )
}

export default App