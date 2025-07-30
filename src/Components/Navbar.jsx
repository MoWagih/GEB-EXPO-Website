import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [toglleNav, setToglleNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  };

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

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const navLinks = [
    { key: "home", path: "/" },
    { key: "program", path: "/Program" },
    { key: "services", path: "/Services" },
    { key: "about", path: "/About" },
    { key: "media", path: "/Media" },
    { key: "contact", path: "/Contact" },
  ];

  return (
    <div>
      <div
        className={`flex items-center justify-between p-3 xl:p-0 xl:ps-4 lg:ps-6 lg:pe-6 fixed top-0 w-full z-100 transition-all duration-500 ${
          isScrolled ? "bg-[#0f6340ee] shadow-lg" : "bg-transparent"
        }`}
      >
        <img
          className="w-[35%] sm:w-[20%] md:w-[15%] lg:w-[16%]"
          src="../../public/Logo.png"
          alt="GEB-EXPO Logo"
        />

        <div className="hidden xl:flex items-center justify-evenly w-[70%] font-medium">
          <div className="flex items-center gap-9 text-white">
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to={link.path}>{t(link.key)}</Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex items-center gap-9"
          >
            <Link
              className={`p-2 ps-6 pe-6 ${
                isScrolled ? " bg-[#f88b598e] text-white" : "bg-white"
              }`}
              to="/Register"
            >
              {t("register")}
            </Link>
          </motion.div>

          {/* <div className="flex items-center gap-2 ps-6">
            <button
              onClick={() => changeLanguage("ar")}
              className="px-2 py-1 hover:text-green-300"
            >
              عربي
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="px-2 py-1 hover:text-green-300"
            >
              English
            </button>
          </div> */}
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

      {toglleNav && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-[#000000f8] z-200 h-[100vh] w-[100%] p-3 fixed top-0 text-white"
        >
          {/* Logo and Close */}
          <div className="flex items-center justify-between">
            <img
              className="w-[35%] sm:w-[20%] md:w-[15%] lg:w-[12%]"
              src="../../public/Logo.png"
              alt="GEB-EXPO Logo"
            />
            <RiCloseLargeFill
              onClick={() => setToglleNav(false)}
              className="text-[22px] text-white cursor-pointer"
            />
          </div>

          <div className="flex flex-col font-medium gap-4 pt-10 pb-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  className="hover:text-green-300 transition hover:text-[18px]"
                  to={link.path}
                  onClick={() => setToglleNav(false)}
                >
                  {t(link.key)}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="p-3 border-t-[1px] text-[18px] border-white flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SiInstagram />
            <SiLinkedin />
            <FaXTwitter />
          </motion.div>

          {/* <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => changeLanguage("ar")}
              className="px-3 py-1 bg-green-600 rounded hover:bg-green-500"
            >
              عربي
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
            >
              English
            </button>
          </div> */}
        </motion.div>
      )}
    </div>
  );
}
