import React from 'react'
import service1 from '../assets/architectural blueprint.jpg'
import service2 from '../assets/supervisor on site.jpg'
import service3 from '../assets/engineering analysis chart.jpg'
import { MdArchitecture } from 'react-icons/md'
import { FaHardHat } from 'react-icons/fa'
import { AiOutlineBarChart } from 'react-icons/ai'

const Services = () => {
  return (
    <main id="services" className='py-40 services' data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-primary ms-10 md:ms-15">الخدمات</h2>

      <div className="w-full px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-around gap-6 mt-10">

        <div className="pb-2 md:pb-4 w-full md:w-sm bg-slate-100 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
          <img
            src={service1}
            className="mb-3 rounded-t-xl h-52 w-full object-cover"
            alt={'التصميم المعماري'}
          />
          <h2 className="flex items-center gap-1 ps-4 text-lg font-semibold text-primary mb-2">
          <MdArchitecture/>التصميم المعماري
          </h2>
          <h2 className="ps-4 text-sm font-semibold text-gray-500">
            ابتكار مساحات عملية وعصرية
          </h2>
        </div>{/* card */}
        <div className="pb-2 md:pb-4 w-full md:w-sm bg-slate-100 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
          <img
            src={service2}
            className="mb-3 rounded-t-xl h-52 w-full object-cover"
            alt={'أشراف علي التنفيذ'}
          />
          <h2 className="flex items-center gap-1 ps-4 text-lg font-semibold text-primary mb-2">
            <FaHardHat />الإشراف على التنفيذ
          </h2>
          <h2 className="ps-4 text-sm font-semibold text-gray-500">
          متابعة دقيقة لضمان أعلى جودة
          </h2>
        </div>{/* card */}
        <div className="pb-2 md:pb-4 w-full md:w-sm bg-slate-100 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
          <img
            src={service3}
            className="mb-3 rounded-t-xl h-52 w-full object-cover"
            alt={'دراسات هندسية'}
          />
          <h2 className="flex items-center gap-1 ps-4 text-lg font-semibold text-primary mb-2">
            <AiOutlineBarChart />الدراسات الهندسية
          </h2>
          <h2 className="ps-4 text-sm font-semibold text-gray-500">
          حلول قائمة على تحليل علمي متكامل
          </h2>
        </div>{/* card */}

      </div>
    </main>
  )
}

export default Services