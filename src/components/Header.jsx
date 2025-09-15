import React, { useState } from "react";
// import logo from "../assets/01.jpg";

const Header = () => {
    // get the Nav menu state
    const [isNav, setIsNav] = useState(false);

    const handleNav = () => {
        setIsNav(!isNav);
    }

    const closeMenu = () => {
        setIsNav(false)
    }

    return (
        <header className="bg-black">
            <div className="max-w-[1200px] flex justify-between md:block items-center mx-auto px-4 py-3 text-lg">
                <div className="flex justify-between items-center gap-10">
                    <a href='/'>
                        {/* <img className="w-7" src={logo} alt="logo" /> */}
                        <h1 className='text-primary font-bold text-2xl'>مكان اللوجو</h1>
                    </a>{/* logo name */}

                    <div className="hidden md:block">
                        <ul className="flex text-xl font-semibold gap-4">
                            <li><a className="text-white hover:text-primary" href="/#">الرئيسية</a></li>
                            <li><a className="text-white hover:text-primary" href="/#services">الخدمات</a></li>
                            <li><a className="text-white hover:text-primary" href="/#about">من نحن</a></li>
                            <li><a className="text-white hover:text-primary" href="/#contactUs">تواصل معنا</a></li>
                        </ul>{/* PC_List */}
                    </div>
                </div>

                <div onClick={handleNav} className="block text-2xl text-white md:hidden">
                    {isNav ? 'X' : '☰'}
                </div>{/* openCloseMenu */}

                {isNav && (
                    <div onClick={handleNav} className='fixed inset-0 w-full h-screen backdrop-blur-md bg-black/30 transition-all duration-500 ease-in-out z-40'></div>
                )}{/* backdrop */}

                <ul onClick={(e) => e.stopPropagation()}
                    className={`fixed top-10 right-1/3 -translate-x-1 w-6/12 text-xl font-semibold z-50 bg-background rounded-2xl flex flex-col items-start p-6 transition-all duration-500 ease-in-out
          ${isNav ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}`}>
                    <h2 className="text-primary text-3xl font-bold mb-2">روابط سريعة</h2>
                    <li className="text-pragraph"><a onClick={closeMenu} href="/#">الرئيسية</a></li>
                    <li className="text-pragraph"><a onClick={closeMenu} href="/#services">الخدمات</a></li>
                    <li className="text-pragraph"><a onClick={closeMenu} href="/#about">من نحن</a></li>
                    <li className="text-pragraph"><a onClick={closeMenu} href="/#contactUs">تواصل معنا</a></li>
                </ul>{/* mopileList */}
            </div>
        </header>
    )
}

export default Header