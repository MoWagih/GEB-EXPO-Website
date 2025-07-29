import React, { useState, useEffect } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { RiCloseLargeFill } from 'react-icons/ri'
import { SiInstagram, SiLinkedin } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [toglleNav, setToglleNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Logo and Menu Bar */}
      <div
        className={`flex items-center justify-between p-3 xl:p-0 xl:ps-4 xl"pe-4 z-100 lg:ps-6 lg:pe-6 fixed top-0 w-full transition-all duration-500 ${
          isScrolled ? "bg-[#0f6340ee] border-b-2 border-[#f0f0f0] shadow-lg" : "bg-transparent"
        }`}
      >
        <img
          className="w-[35%] sm:w-[20%] md:w-[15%] lg:w-[16%]"
          src="../../public/Logo.png"
          alt="GEB-EXPO Logo"
        />

        {/* Main Links and Actions */}
        <div className="hidden xl:flex items-center justify-evenly w-[70%] font-medium">
          {/* Main Links */}
          <div
            className={`flex items-center gap-9 ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            <Link to="/">الصفحة الرئيسية</Link>
            <Link to="/Program">البرنامج</Link>
            <Link to="/Services">الخدمات</Link>
            <Link to="/About">عن المعرض</Link>
            <Link to="/Media">الإعلام</Link>
            <Link to="/Contact">تواصل معنا</Link>
          </div>

          {/* Main Actions */}
          <div className="flex items-center gap-9">
            <Link
              className={`p-2 ps-6 pe-6 ${
                isScrolled ? " bg-[#f88b598e] text-white" : "bg-white"
              }`}
              to="/Register"
            >
              التسجيل
            </Link>
          </div>
        </div>

        <HiOutlineMenuAlt2
          className={`text-[22px] xl:hidden lg:text-[28px] ${
            isScrolled ? "text-white" : "text-white"
          }`}
          onClick={() => {
            setToglleNav(true);
          }}
        />
      </div>

      {/* Mobile Nav Bar */}
      {toglleNav && (
        <div className="bg-blue-900 z-200 h-[100vh] w-[100%] p-3 absolute top-0 text-white transition-all duration-500">
          {/* Logo and Closing Button */}
          <div className="flex items-center justify-between">
            <img
              className="w-[35%] sm:w-[20%] md:w-[15%] lg:w-[12%]"
              src="../../public/Logo.png"
              alt="GEB-EXPO Logo"
            />
            <RiCloseLargeFill
              onClick={() => {
                setToglleNav(false);
              }}
              className="text-[22px] text-white"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col font-medium gap-4 pt-10 pb-10">
            <Link to="/Home">الصفحة الرئيسية</Link>
            <Link to="/About">عن المعرض</Link>
            <Link to="/Program">البرنامج</Link>
            <Link to="/Exhibitors">العارضون</Link>
            <Link to="/Media">الإعلام</Link>
            <Link to="/Register">التسجيل</Link>
            <Link to="/Contact">التواصل</Link>
          </div>

          {/* Social Media Links */}
          <div className="p-3 border-t-[1px] border-white flex items-center gap-4">
            <SiInstagram />
            <SiLinkedin />
            <FaXTwitter />
          </div>
        </div>
      )}
    </div>
  );
}
