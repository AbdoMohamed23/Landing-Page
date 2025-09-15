import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Footer = () => {

  return (
    <>
      <footer className="bg-cyan-900 text-white py-10 px-6" id="footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold mb-4">Prime Engineering Solutions</h2>
            <p className="text-sm text-white/80">
              نحو حلول هندسية مبتكرة تحقق رؤيتك
              نقدم خدمات التصميم والإشراف والاستشارات الهندسية بأعلى معايير الجودة
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-3">روابط سريعة</h3>
            <ul className="space-y-2 text-sm font-semibold text-white/90">
              <li><a href="/#" className="hover:underline">الرئيسية</a></li>
              <li><a href="/#about" className="hover:underline">من نحن</a></li>
              <li><a href="/#services" className="hover:underline">الخدمات</a></li>
              <li><a href="/#contactUs" className="hover:underline">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">بيانات الموقع</h3>
            <ul className="space-y-2 text-sm font-semibold text-white/90">
              <li><p className="hover:underline flex items-center gap-1.5"><FaPhoneAlt /> +201149270139</p></li>
              <li><p className="hover:underline flex items-center gap-1.5"><MdEmail /> abdomohamed0139@gmail.com</p></li>
              <li><p className="hover:underline flex items-center gap-1.5"><FaMapMarkerAlt /> القاهرة - مصر</p></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">تابعنا</h3>
            <div className="flex space-x-4">
              <a href="/#"><FaFacebookSquare className="w-5 h-5" /> </a>
              <a href="/#"><FaInstagram className="w-5 h-5" /> </a>
              <a href="/#"><FaLinkedin className="w-5 h-5" /> </a>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm text-white/60">
          &copy; 2025 Prime Engineering Solutions. جميع الحقوق محفوظة.
        </div>
      </footer>
    </>
  )
}

export default Footer