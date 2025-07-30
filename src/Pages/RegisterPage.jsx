import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const [role, setRole] = useState("visitor");
  const { t } = useTranslation(); // ✅ نجيب الدوال من i18n

  return (
    <div className="pt-[100px] flex flex-col items-center gap-10 text-white">
      {/* ✅ Hero Title */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-green-500">
          {t("register_section.title")}
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
          {t("register_section.subtitle")}
        </p>
      </motion.div>

      {/* ✅ Switch Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setRole("visitor")}
          className={`px-6 py-2 text-sm font-semibold border transition ${
            role === "visitor"
              ? "bg-green-600 border-green-600 text-white"
              : "border-gray-500 text-gray-300 hover:border-green-500 hover:text-white"
          }`}
        >
          {t("register_section.visitor")}
        </button>
        <button
          onClick={() => setRole("exhibitor")}
          className={`px-6 py-2 text-sm font-semibold border transition ${
            role === "exhibitor"
              ? "bg-[#f88b598e] border-[#f88b598e] text-white"
              : "border-gray-500 text-gray-300 hover:border-[#f88b598e] hover:text-white"
          }`}
        >
          {t("register_section.exhibitor")}
        </button>
      </div>

      {/* ✅ Visitor Form */}
      {role === "visitor" && (
        <motion.form
          className="bg-[#0000005a] backdrop-blur-md w-full max-w-2xl p-6 flex flex-col gap-4 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-green-500 text-center">
            {t("register_section.visitor_form")}
          </h2>

          <input
            type="text"
            placeholder={t("form.full_name")}
            className="form-input p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]"
          />
          <input
            type="email"
            placeholder={t("form.email")}
            className="form-input p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]"
          />
          <input
            type="text"
            placeholder={t("form.phone")}
            className="form-input p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]"
          />
          <input
            type="text"
            placeholder={t("form.job")}
            className="form-input p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]"
          />

          <button className="bg-green-600 mt-2 py-2 font-semibold hover:bg-green-700 transition">
            {t("form.submit")}
          </button>
        </motion.form>
      )}

      {/* ✅ Exhibitor Form */}
      {role === "exhibitor" && (
        <motion.form
          className="bg-[#0000005a] backdrop-blur-md w-full max-w-2xl p-6 flex flex-col gap-4 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-[#f88b59] text-center">
            {t("register_section.exhibitor_form")}
          </h2>

          <input
            type="text"
            placeholder={t("form.org_name")}
            className="form-input text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b598e] p-2 bg-[#ffffff15]"
          />
          <input
            type="text"
            placeholder={t("form.responsible_name")}
            className="form-input text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b598e] p-2 bg-[#ffffff15]"
          />
          <input
            type="email"
            placeholder={t("form.email")}
            className="form-input text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b598e] p-2 bg-[#ffffff15]"
          />
          <input
            type="text"
            placeholder={t("form.phone")}
            className="form-input text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b598e] p-2 bg-[#ffffff15]"
          />
          <textarea
            rows="4"
            placeholder={t("form.participation_details")}
            className="form-input resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b598e] p-2 bg-[#ffffff15]"
          ></textarea>

          <button className="bg-[#d16d3f8e] mt-2 py-2 font-semibold hover:bg-[#f88b598e] transition">
            {t("form.submit")}
          </button>
        </motion.form>
      )}

      <Footer />
    </div>
  );
}
