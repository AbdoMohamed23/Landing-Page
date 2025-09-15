import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Services from './components/Services'
import Footer from './components/Footer'
import FlowWhatsApp from './components/FlowWhatsApp'

const App = () => {
  return (
    <>
     <Header />
     <Hero />
     <Services />
     <About />
     <ContactUs />
     <FlowWhatsApp />
     <Footer />
    </>
  )
}

export default App