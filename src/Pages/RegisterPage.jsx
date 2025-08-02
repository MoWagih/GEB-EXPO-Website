import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Footer from "../Components/Footer";
import HeroImg from "../assets/imgs/expo4.png";

export default function RegisterPage() {
  const [role, setRole] = useState("visitor");
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-16">

      {/* 🟢 Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[80vh] pt-[80px] lg:pt-[100px]">
        <img
          src={HeroImg}
          alt={t("registerPage.hero_alt")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("registerPage.hero_title")}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed">
            {t("registerPage.hero_subtitle")}
          </p>
        </div>
      </div>

      {/* 🟠 Role Switch Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setRole("visitor")}
          className={`px-6 py-2 text-sm sm:text-base font-semibold border transition ${
            role === "visitor"
              ? "bg-green-600 border-green-600 text-white shadow-lg"
              : "border-gray-500 text-gray-300 hover:border-green-500 hover:text-white"
          }`}
        >
          {t("registerPage.visitor_button")}
        </button>
        <button
          onClick={() => setRole("exhibitor")}
          className={`px-6 py-2 text-sm sm:text-base font-semibold border transition ${
            role === "exhibitor"
              ? "bg-[#f88b598e] text-white shadow-lg"
              : "text-gray-300 hover:border-[#f88b59] hover:text-white"
          }`}
        >
          {t("registerPage.exhibitor_button")}
        </button>
      </div>

      {/* 🟢 Visitor Form */}
      {role === "visitor" && (
        <motion.form
          className="bg-[#00000059] backdrop-blur-md w-full max-w-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-green-500 text-center">
            {t("registerPage.visitor_form.title")}
          </h2>

          <input type="text" placeholder={t("registerPage.visitor_form.full_name")} className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]" />
          <input type="email" placeholder={t("registerPage.visitor_form.email")} className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]" />
          <input type="text" placeholder={t("registerPage.visitor_form.phone")} className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]" />
          <input type="text" placeholder={t("registerPage.visitor_form.job")} className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]" />

          <button className="bg-green-600 mt-2 py-2 text-white font-semibold hover:bg-green-700 transition">
            {t("registerPage.submit_button")}
          </button>
        </motion.form>
      )}

      {/* 🟠 Exhibitor Form */}
      {role === "exhibitor" && (
        <motion.form
          className="bg-[#00000059] backdrop-blur-md w-full max-w-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#f88b59fa] text-center">
            {t("registerPage.exhibitor_form.title")}
          </h2>

          <input type="text" placeholder={t("registerPage.exhibitor_form.organization")} className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]" />
          <input type="text" placeholder={t("registerPage.exhibitor_form.person_name")} className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]" />
          <input type="email" placeholder={t("registerPage.exhibitor_form.email")} className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]" />
          <input type="text" placeholder={t("registerPage.exhibitor_form.phone")} className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]" />
          <textarea rows="4" placeholder={t("registerPage.exhibitor_form.details")} className="p-3 resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]"></textarea>

          <button className="bg-[#f88b598e] mt-2 py-2 text-white font-semibold hover:bg-[#d36d3f] transition">
            {t("registerPage.submit_button")}
          </button>
        </motion.form>
      )}

      <Footer />
    </div>
  );
}
