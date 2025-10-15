import React from 'react'
import { GoCheckCircle } from 'react-icons/go'

const About = () => {
  return (
    <section className="py-20 bg-background text-center" id="about">
      <div className="max-w-5xl mx-auto px-6">
        {/* <div className='flex flex-col items-center gap-3 mb-6' data-aos="fade-up"> */}
          <h2 className='text-primary text-4xl font-bold mb-6' data-aos="fade-up">لمحه عني</h2>
          {/* <div className='border-2 border-primary w-20'></div> */}
        {/* </div> */}
        {/* grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
          <div className='p-10 bg-white border-1 border-background shadow-lg rounded-2xl' data-aos="zoom-in">
            <h2 className='text-primary text-4xl font-bold mb-4'>لماذا تختارني؟</h2>
            <p className='text-gray-700'>أنا متخصص في تصميم صفحات الهبوط والمواقع التعريفية التي تساعدك في جذب العملاء وزيادة مبيعاتك. أقدم لك تصميمات احترافية وسريعة الاستجابة تتناسب مع هوية علامتك التجارية.</p>
          </div>
          <div className='p-10 bg-white border-1 border-background shadow-lg rounded-2xl' data-aos="zoom-in">
            <h2 className='text-primary text-4xl font-bold mb-4'>أجيد أيضا</h2>
            <p className="text-gray-700">
              العمل علي shopify وبناء متاجر إلكترونية احترافية تساعدك في توسيع نطاق عملك وزيادة أرباحك وتحقيق أهدافك التجارية.
            </p>
            {/* <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-right max-w-4xl mx-auto'>
            <li className='flex items-center gap-3'>
              <GoCheckCircle className='text-primary text-2xl flex-shrink-0' />
              تصميمات مخصصة تعكس هوية علامتك التجارية.
            </li>
            <li className='flex items-center gap-3'>
              <GoCheckCircle className='text-primary text-2xl flex-shrink-0' />
              مواقع سريعة الاستجابة تعمل بسلاسة على جميع الأجهزة.
            </li>
            <li className='flex items-center gap-3'>
              <GoCheckCircle className='text-primary text-2xl flex-shrink-0' />
              تحسين تجربة المستخدم لزيادة التفاعل والتحويلات.
            </li>
            <li className='flex items-center gap-3'>
              <GoCheckCircle className='text-primary text-2xl flex-shrink-0' />
              دعم فني مستمر لضمان أداء موقعك بأفضل شكل.
            </li>
          </ul> */}
          </div>
        </div>
        <div>
          <h2 className='text-primary text-4xl font-bold mb-6' data-aos="fade-up">هل أنت مستعد للبدء؟</h2>
          <p className='text-gray-700 mb-10' data-aos="fade-up">اتصل بي اليوم للحصول على استشارة مجانية ومناقشة احتياجاتك. سأكون سعيدًا بمساعدتك في تحقيق أهدافك الرقمية بأسعار تنافسية.</p>
        </div>

        <a href="https://wa.me/+201149270139" target="blank" className='inline-block cursor-pointer rounded-xl border border-primary hover:border-primary bg-primary px-6 py-2 font-bold text-white hover:bg-sky-100 hover:text-primary shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03]'>
          <span className='flex items-center justify-center gap-2'>
            <GoCheckCircle />اطلب استشارة الآن
          </span>
        </a>

      </div>
    </section>
  )
}

export default About