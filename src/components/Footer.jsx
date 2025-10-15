import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-[#071B34] text-white py-10 px-6"
      id="footer"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-lg font-semibold mb-3">لا تفوت فرصه الحصول علي الخدمه</h3>
          <ul className='grid grid-cols-1 md:grid-cols-1 gap-1 text-start max-w-4xl mx-auto'>
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
            {/* <li className='flex items-center gap-3'>
              <GoCheckCircle className='text-primary text-2xl flex-shrink-0' />
              دعم فني مستمر لضمان أداء موقعك بأفضل شكل.
            </li> */}
          </ul>
        </div>

        {/* بيانات التواصل */}
        <div>
          <h3 className="text-lg font-semibold mb-3">البيانات والموقع</h3>
          <ul className="space-y-3 text-sm font-medium text-white/90">
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaPhoneAlt className="text-white/80" />
              <a
                href="tel:+201149270139"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +201149270139
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <MdEmail className="text-white/80" />
              <a
                href="mailto:abdomohamed0139@gmail.com?subject=تواصل%20من%20صفحة%20الهبوط"
                className="hover:underline"
              >
                abdomohamed0139@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaMapMarkerAlt className="text-white/80" />
              <span>المحلة الكبرى - مصر</span>
            </li>
          </ul>
        </div>


        {/* وصف الموقع */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            موقع تعريفي شخصي أو لشركة
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            أصمم مواقع تعريفية وصفحات هبوط احترافية تساعدك في إبراز مشروعك
            وجذب العملاء المستهدفين. أركز على تقديم تجربة استخدام سلسة
            وتصميمات متجاوبة مع جميع الأجهزة، مع تحسين لمحركات البحث لضمان
            ظهورك في النتائج الأولى.
          </p>
        </div>



        {/* وسائل التواصل الاجتماعي */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">تابعني</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaFacebookSquare className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdo-mohamed-50546b29a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div> */}
      </div>

      {/* حقوق النشر */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/60">
        صفحة هبوط &copy; 2025 جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;