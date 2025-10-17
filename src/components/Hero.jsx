import React from 'react'
import Header from './Header'
import { GoCheckCircle } from 'react-icons/go'

const Hero = () => {
    return (
        <main className='hero'>
            <Header />
            <section className='max-w-[1200px] mx-auto pt-60 px-10 justify-start'>
                <div data-aos="fade-left">
                    <h1 className='text-3xl md:text-4xl text-background font-bold'>أصنع موقعك التعريفي باحترافية</h1>
                    <h4 className='text-lg md:text-xl text-gray-200 font-normal py-2'>أقدم خدمات التصميم وبناء صفحات الهبوط بأعلى معايير الجودة</h4>
                    <div className='mt-10 flex items-center gap-5'>
                        <a href="https://wa.me/+201149270139" target="blank" className='inline-block rounded-xl border border-white bg-transparent px-6 py-2 font-bold text-white hover:bg-primary hover:border-primary shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03]'>                        <span className='flex items-center justify-center gap-2'>
                            <GoCheckCircle />اطلب استشارة الآن
                        </span></a>
                        <p></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero