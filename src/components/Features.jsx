import React from 'react'
import service1 from '../assets/Design.png'
import service2 from '../assets/SEO.png'
import service3 from '../assets/New Design.png'
import service4 from '../assets/Continuo.png'
import { FaGlobe, FaPalette, FaClipboardCheck, FaSearch } from 'react-icons/fa'

const Features = () => {
    const Features = [
        {
            icon: <FaGlobe className="text-primary" />,
            title: "تصميم مواقع تعريفية",
            desc: "ابتكار موقع يعبر عن هويتك ويعرف عملاءك بخدماتك بأسلوب احترافي وسهل التصفح.",
            img: service1,
        },
        {
            icon: <FaPalette className="text-primary" />,
            title: "الألوان والمحتوى",
            desc: "نساعدك في اختيار الألوان والنصوص المناسبة لهويتك البصرية لتجربة مميزة.",
            img: service3,
        },
        {
            icon: <FaSearch className="text-primary" />,
            title: "تحسين محركات البحث (SEO)",
            desc: "نضبط موقعك ليظهر في نتائج البحث الأولى ويجذب عملاء أكثر دون إعلانات.",
            img: service2,
        },
        {
            icon: <FaClipboardCheck className="text-primary" />,
            title: "المتابعة والدعم الفني",
            desc: "نظل معك في كل خطوة للتأكد من أن الموقع يعمل بكفاءة بعد الإطلاق.",
            img: service4,
        },
    ]

    return (
        <main id="features" className="py-40 bg-white">
            <h2
                className="text-3xl md:text-4xl font-bold text-primary text-center"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                المميزات
            </h2>

            <div className="w-full px-4 md:px-8 mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                {Features.map((feature, index) => (
                    <div
                        key={index}
                        tabIndex="0"
                        className="
              bg-background/60 rounded-xl shadow-md overflow-hidden
              transition-all duration-300 ease-in-out
              hover:shadow-xl hover:-translate-y-2 hover:bg-white
              focus:shadow-xl focus:bg-white">
                        <img
                            src={feature.img}
                            className="h-52 w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                            alt={feature.title}
                        />
                        <div className="p-4 text-start">
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
                                {feature.icon} {feature.title}
                            </h3>
                            <p className="text-sm font-medium text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Features