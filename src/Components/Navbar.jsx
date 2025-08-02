import React, { useState, useEffect } from "react";
import Logo from "../assets/imgs/Logo.png";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
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
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="font-medium">
      <div
        className={`flex items-center justify-between p-3 xl:p-0 xl:ps-4 lg:ps-6 lg:pe-6 fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled ? "bg-[#0f6340ee] shadow-lg" : "bg-transparent"
        }`}
      >
        <img
          className="w-[35%] sm:w-[20%] md:w-[15%] lg:w-[16%]"
          src={Logo}
          alt="GEB-EXPO Logo"
          loading="lazy"
        />

        <div className="hidden xl:flex items-center justify-evenly w-[70%]">
          <div className="flex items-center gap-9 text-white">
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={link.path}
                  className="hover:text-green-300 transition-colors duration-200"
                >
                  {t(`navbar.${link.key}`)}
                </Link>
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
              className={`px-6 py-2 ${
                isScrolled ? "bg-[#f88b598e] text-white" : "bg-white text-black"
              } hover:bg-[#f88b59] transition-colors duration-200`}
              to="/Register"
            >
              {t("navbar.register")}
            </Link>
            
            {/* Switch Language */}
            <div className="flex items-center justify-center gap-3 mt-4">
              {i18n.language === "en" ? (
                <button
                  onClick={() => i18n.changeLanguage("ar")}
                  className="text-white text-sm sm:text-base p-2 transition-colors duration-200"
                >
                  {t("navbar.language_ar")}
                </button>
              ) : (
                <button
                  onClick={() => i18n.changeLanguage("en")}
                  className="text-white text-sm sm:text-base transition-colors duration-200"
                >
                  {t("navbar.language_en")}
                </button>
              )}
            </div>
          </motion.div>
        </div>

        <HiOutlineMenuAlt2
          className={`text-[22px] xl:hidden lg:text-[28px] text-white`}
          onClick={() => setToglleNav(true)}
        />
      </div>

      {toglleNav && (
        <motion.div
          initial={{ x: i18n.language === "ar" ? "-100%" : "100%" }}
          animate={{ x: 0 }}
          exit={{ x: i18n.language === "ar" ? "-100%" : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-[#000000f8] z-[200] h-screen w-full p-3 fixed top-0 text-white"
        >
          <div className="flex items-center justify-between">
            <img
              className="w-[35%] sm:w-[20%] md:w-[15%] lg:w-[12%]"
              src={Logo}
              alt="GEB-EXPO Logo"
              loading="lazy"
            />
            <RiCloseLargeFill
              onClick={() => setToglleNav(false)}
              className="text-[22px] text-white cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-4 pt-10 pb-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  className="text-[18px] hover:text-green-300 transition-all duration-200 hover:text-[20px]"
                  to={link.path}
                  onClick={() => setToglleNav(false)}
                >
                  {t(`navbar.${link.key}`)}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="p-3 border-t border-white flex items-center justify-center gap-6 text-[18px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SiInstagram className="hover:text-green-300 transition-colors duration-200" />
            <SiLinkedin className="hover:text-green-300 transition-colors duration-200" />
            <FaXTwitter className="hover:text-green-300 transition-colors duration-200" />
          </motion.div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => i18n.changeLanguage("ar")}
              className="px-3 py-1 bg-green-600 rounded hover:bg-green-500 text-white text-sm sm:text-base transition-colors duration-200"
            >
              {t("navbar.language_ar")}
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm sm:text-base transition-colors duration-200"
            >
              {t("navbar.language_en")}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
