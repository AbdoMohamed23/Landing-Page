import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Features from './components/Features'
import Footer from './components/Footer'
import FlowWhatsApp from './components/FlowWhatsApp'
import WhatWeOffer from './components/WhatWeOffer'
import Rate from './components/Rate'

const App = () => {
  return (
    <>
     <Hero />
     <WhatWeOffer />
     <Features />
     <ContactUs />
     <About />
     <Rate />
     <FlowWhatsApp />
     <Footer />
    </>
  )
}

export default App