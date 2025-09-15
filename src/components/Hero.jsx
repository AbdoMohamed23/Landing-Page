import React from 'react'

const Hero = () => {
    return (
        <main className='hero pt-60 px-10 justify-start' data-aos='fade-in'>
            <h1 className='text-3xl md:text-4xl text-primary font-bold'>نحو حلول هندسية مبتكرة تحقق رؤيتك</h1>
            <h4 className='text-xl md:text-2xl text-white font-semibold py-2'>نقدم خدمات التصميم والإشراف والاستشارات الهندسية بأعلى معايير الجودة</h4>
            <div className='mt-10'>
                <a href="/#" className='bg-cta hover:bg-cta/90 inline-block text-xl rounded-2xl border border-cta bg-cta px-6 py-2 font-medium text-pragraph hover:bg-strong-btn shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2'>اطلب استشارة الآن</a>
            </div>
        </main>
    )
}

export default Hero