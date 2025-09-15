import React from 'react'
import about from '../assets/Team of architects with blueprints.jpg'


const About = () => {
  return (
    <main id='about' className='about flex flex-col md:flex-row justify-between gap-6 max-w-[1200px] mx-auto py-32 w-full px-4 md:px-6' data-aos='fade-in'>
      <div className='order-2 md:order-1 ps-2'>
        <h2 className='text-primary font-bold text-2xl'>Prime Engineering Solutions</h2>
        <h3 className='text-pragraph font-semibold text-xl'>مكتب استشارات هندسية يقدم حلول متكاملة للمشاريع السكنية والتجارية والصناعية، من الفكرة حتى التنفيذ</h3>
      </div>
      <div className='order-1 md:order-2'>
        <img src={about} className='rounded-2xl w-xl' alt="Team of architects with blueprints" />
      </div>
    </main>
  )
}

export default About