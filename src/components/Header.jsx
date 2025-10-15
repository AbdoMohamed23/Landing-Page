import React, { useState, useEffect } from "react";
import logo from "../assets/Landing Page AR.png";
import {
    FaHome,
    FaBriefcase,
    // FaInfoCircle,
    FaPhone,
    FaBars,
    FaTimes,
    FaStar,
    FaUser,
    FaCommentDots,
} from "react-icons/fa";

const Header = () => {
    const [isNav, setIsNav] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const handleNav = () => setIsNav(!isNav);
    const closeMenu = () => setIsNav(false);

    // 🧠 تحديد السكشن الحالي أثناء التمرير
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "whatWeOffer", "features", "about", "contact", "rate"];
            let current = "home";

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const offsetTop = section.offsetTop - 100;
                    if (window.scrollY >= offsetTop - 150 && window.scrollY < offsetTop + section.offsetHeight - 150) current = id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // 📱 تنسيق الروابط للموبايل
    const linkClassMobile = (id) =>
        `flex items-center gap-2 transition-all duration-300 ${activeSection === id ? "text-primary py-2 ps-3 rounded-xl bg-sky-200 font-bold" : "text-primary py-2 ps-3"
        }`;

    const [logoLoaded, setLogoLoaded] = useState(false);

    return (
        <header className="w-full bg-transperant"> {/* fixed top-0 left-0 shadow-md bg-black/30 backdrop-blur-sm z-10 */}
            <div className="max-w-[1200px] flex justify-between items-center mx-auto px-4 py-3 text-lg">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2">
                    {!logoLoaded && (
                        <h2 className="text-primary font-bold text-2xl">صفحة هبوط</h2>
                    )}
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-auto"
                        onLoad={() => setLogoLoaded(true)}
                        style={{ display: logoLoaded ? "block" : "none" }}
                    />
                </a>


                {/* Desktop Nav */}
                <ul className="hidden md:flex text-xl font-semibold gap-6">
                    <li>
                        <a href="#home" className="text-white hover:text-primary transition-all duration-300 ">
                            الرئيسية
                        </a>
                    </li>
                    <li>
                        <a href="#whatWeOffer" className="text-white hover:text-primary transition-all duration-300 ">
                            الخدمات
                        </a>
                    </li>
                    <li>
                        <a href="#features" className="text-white hover:text-primary transition-all duration-300 ">
                            المميزات
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white hover:text-primary transition-all duration-300 ">
                            تواصل معنا
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-white hover:text-primary transition-all duration-300 ">
                            لمحه عني
                        </a>
                    </li>
                    <li>
                        <a href="#rate" className="text-white hover:text-primary transition-all duration-300 ">
                            آراء العملاء
                        </a>
                    </li>
                </ul>

                {/* Mobile Icon */}
                <div
                    onClick={handleNav}
                    className="block md:hidden text-3xl text-white cursor-pointer"
                >
                    {isNav ? <FaTimes /> : <FaBars />}
                </div>

                {/* Backdrop */}
                {isNav && (
                    <div
                        onClick={closeMenu}
                        className="fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-sm z-40"
                    ></div>
                )}

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 w-8/12 max-w-[300px] h-screen bg-background shadow-2xl p-4 z-50 transform transition-transform duration-500 ease-in-out
            ${isNav ? "translate-x-0" : "translate-x-full"}`}
                >
                    <a href="#home" className="flex items-center gap-2">
                        {!logoLoaded && (
                            <h2 className="text-primary text-2xl font-bold mb-6 ps-2">صفحة هبوط</h2>
                        )}
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-auto mb-6 ps-2"
                            onLoad={() => setLogoLoaded(true)}
                            style={{ display: logoLoaded ? "block" : "none" }}
                        />
                    </a>

                    <ul className="flex flex-col gap-3 text-lg font-semibold">
                        <li>
                            <a href="#home" className={linkClassMobile("home")} onClick={closeMenu}>
                                <FaHome className="text-lg" />
                                الرئيسية
                            </a>
                        </li>
                        <li>
                            <a href="#whatWeOffer" className={linkClassMobile("whatWeOffer")} onClick={closeMenu}>
                                <FaBriefcase className="text-lg" />
                                الخدمات
                            </a>
                        </li>
                        <li>
                            <a href="#features" className={linkClassMobile("features")} onClick={closeMenu}>
                                <FaStar className="text-lg" />
                                المميزات
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={linkClassMobile("contact")} onClick={closeMenu}>
                                <FaPhone className="text-lg" />
                                تواصل معنا
                            </a>
                        </li>
                        <li>
                            <a href="#about" className={linkClassMobile("about")} onClick={closeMenu}>
                                <FaUser className="text-lg" />
                                لمحه عني
                            </a>
                        </li>
                        <li>
                            <a href="#rate" className={linkClassMobile("rate")} onClick={closeMenu}>
                                <FaCommentDots className="text-lg" />
                                آراء العملاء
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;