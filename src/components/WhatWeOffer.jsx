import React, { useState, useEffect } from 'react'
import dashboard from '../assets/Minimalist Dashboard Illustration.png'
import seoAnalytics from '../assets/Minimalist SEO Analytics Dashboard Illustration on White Background.png'
import { FaGlobe, FaMobileAlt, FaLanguage, FaSearch, FaMoneyBillWave } from 'react-icons/fa'
import { MdAttachMoney, MdOutlineRocketLaunch } from 'react-icons/md'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { GrMoney } from 'react-icons/gr'

const WhatWeOffer = () => {
    const images = [
        { image: seoAnalytics, alt: 'Website translation illustration' },
        { image: dashboard, alt: 'Responsive web design on various devices' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // كل 4 ثواني
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <main className='bg-background'>
            <section
                id='whatWeOffer'
                className='bg-background flex flex-col md:flex-row justify-between gap-10 max-w-[1200px] mx-auto py-40 w-full px-4 md:px-6'
            >
                {/* النصوص */}
                <div className='order-2 md:order-1 ps-2 flex-1' data-aos="fade-in">
                    <h2 className='text-primary font-bold text-3xl mb-4'>
                        ماذا أقدم لك؟
                    </h2>
                    <p className='text-pragraph text-lg font-medium mb-6'>
                        أساعدك على إبراز نشاطك أو مشروعك من خلال تصميم مواقع تعريفية وصفحات هبوط حديثة وسريعة الاستجابة، مع تركيز كامل على تحسين تجربة المستخدم وضمان توافق الموقع مع جميع الأجهزة.
                    </p>

                    <ul className='space-y-3 text-gray-700'>
                        <li className='flex items-center gap-2'>
                            <FaGlobe className='text-primary'/>
                            <span className='text-pragraph'>تصميم مواقع تعريفية تعكس هويتك</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <MdOutlineRocketLaunch className='text-primary'/>
                            <span className='text-pragraph'>صفحات هبوط مخصصة للإعلانات لزيادة التحويل</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaMobileAlt className='text-primary'/>
                            <span className='text-pragraph'>مواقع متوافقة مع الموبايل وتجربة استخدام سلسة</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaLanguage className='text-primary'/>
                            <span className='text-pragraph'>إضافة الترجمة (عربي / إنجليزي)</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaSearch className='text-primary'/>
                            <span className='text-pragraph'>تحسين محركات البحث (SEO) لزيادة ظهورك</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <GrMoney className='text-primary'/>
                            <span className='text-pragraph'>أقدم الخدمة بأسعار تنافسية تناسب ميزانيتك</span>
                        </li>
                    </ul>
                </div>

                {/* الصورة (سلايدر) */}
                <div data-aos='fade-in' className='order-1 md:order-2 md:flex-1 relative h-[340px] sm:h-[450px] md:h-[400px] overflow-hidden rounded-2xl shadow-md'>
                    {images.map((prop, index) => (
                        <img
                            key={index}
                            src={prop.image}
                            alt={prop.alt}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-initial ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default WhatWeOffer