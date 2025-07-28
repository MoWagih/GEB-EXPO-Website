import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaXTwitter } from 'react-icons/fa6'
import { HiOutlineMenuAlt2} from 'react-icons/hi'
import { RiCloseLargeFill } from 'react-icons/ri'
import { SiInstagram, SiLinkedin } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      document.body.dir = lang === "ar" ? "rtl" : "ltr"; // لضبط الاتجاه
    };
  
const [ toglleNav , setToglleNav ] = useState(false);

  return (
    <div>
       {/* Logo and Menu Bar */}
       <div className='flex items-center justify-between p-3 lg:ps-6 lg:pe-6 border-[#fff] fixed top-0 w-full'>
            <img className='w-[35%] sm:w-[20%] md:w-[15%] lg:w-[16%]' src="../../public/Logo.png" alt="GEB-EXPO Logo" />
            
            {/* Main Links and Actions */}
           <div className='hidden xl:flex items-center justify-evenly w-[70%] font-medium'>
                 {/* Main Links */}
                    <div className='flex items-center gap-9 text-white'>
                            <Link to="/">الصفحة الرئيسية</Link>
                            <Link to="/About">عن المعرض</Link>
                            <Link to="/Program">البرنامج</Link>
                            <Link to="/Exhibitors">العارضون</Link>
                            <Link to="/Media">الإعلام</Link>
                    </div>

            {/* Main Actions */}
            <div className='flex items-center gap-9'>
                <Link className='p-2 bg-[#d83706] rounded-md ps-4 pe-4' to="/Register">التسجيل</Link>
                <Link className='p-2 bg-blue-600 rounded-md ps-4 pe-4' to="/Contact">التواصل</Link>
            </div>

            {/* <div className='flex items-center gap-4'>
             { 
                i18n.language === "ar" ? (
                <button onClick={() => changeLanguage("en")}>English</button>
                ) : (
                <button onClick={() => changeLanguage("ar")}>عربي</button>
            )}
            </div> */}

           
           </div>

            <HiOutlineMenuAlt2 className='text-[22px] text-white xl:hidden lg:text-[28px]' onClick={()=>{setToglleNav(true)}} />
       </div>

       {/* Mobile Nav Bar */}
       { toglleNav && <div className='bg-blue-900 h-[100vh] w-[100%] p-3 absolute top-0 text-white'>
             {/* Logo and Closing Button */}
            <div className='flex items-center justify-between'>
            <img className='w-[35%] sm:w-[20%] md:w-[15%] lg:w-[12%]' src="../../public/Logo.png" alt="GEB-EXPO Logo" />
                <RiCloseLargeFill onClick={()=>{setToglleNav(false)}} className='text-[22px] text-white' />
            </div>

                {/* Links */}
                <div className='flex flex-col font-medium gap-4 pt-10 pb-10'>
                    <Link to="/Home">الصفحة الرئيسية</Link>
                    <Link to="/About">عن المعرض</Link>
                    <Link to="/Program">البرنامج</Link>
                    <Link to="/Exhibitors">العارضون</Link>
                    <Link to="/Media">الإعلام</Link>
                    <Link to="/Register">التسجيل</Link>
                    <Link to="/Contact">التواصل</Link>
                </div>

                {/* Social Media Links */}
                <div className='p-3 border-t-[1px] border-white flex items-center gap-4'>
                    <SiInstagram />
                    <SiLinkedin />
                    <FaXTwitter />
                </div>
            </div>
            
            }

    </div>
  )
}
