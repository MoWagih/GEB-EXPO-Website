import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import HeroImg from "../assets/imgs/expo4.png";

export default function RegisterPage() {
  const [role, setRole] = useState("visitor");

  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-16">

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[80vh] pt-[80px] lg:pt-[100px]">
        <img
          src={HeroImg}
          alt="التسجيل"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            التسجيل في GEB Expo
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed">
            اختر نوع التسجيل المناسب لك — زائر أو مشارك — واملأ البيانات التالية للمشاركة في الحدث.
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setRole("visitor")}
          className={`px-6 py-2 text-sm sm:text-base font-semibold border transition ${
            role === "visitor"
              ? "bg-green-600 border-green-600 text-white shadow-lg"
              : "border-gray-500 text-gray-300 hover:border-green-500 hover:text-white"
          }`}
        >
          تسجيل كزائر
        </button>
        <button
          onClick={() => setRole("exhibitor")}
          className={`px-6 py-2 text-sm sm:text-base font-semibold border transition ${
            role === "exhibitor"
              ? "bg-[#f88b598e] text-white shadow-lg"
              : "text-gray-300 hover:border-[#f88b59] hover:text-white"
          }`}
        >
          تسجيل كمشارك
        </button>
      </div>

      {role === "visitor" && (
        <motion.form
          className="bg-[#00000059] backdrop-blur-md w-full max-w-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-green-500 text-center">
            نموذج تسجيل الزائر
          </h2>

          <input type="text" placeholder="الاسم الكامل" className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]" />
          <input type="email" placeholder="البريد الإلكتروني" className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]" />
          <input type="text" placeholder="رقم الهاتف" className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]" />
          <input type="text" placeholder="الوظيفة / جهة العمل" className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#ffffff15]" />

          <button className="bg-green-600 mt-2 py-2 text-white font-semibold hover:bg-green-700 transition">
            إرسال
          </button>
        </motion.form>
      )}

      {role === "exhibitor" && (
        <motion.form
          className="bg-[#00000059] backdrop-blur-md w-full max-w-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#f88b59fa] text-center">
            نموذج تسجيل المشارك
          </h2>

          <input type="text" placeholder="اسم الجهة / المؤسسة" className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]" />
          <input type="text" placeholder="اسم الشخص المسؤول" className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]" />
          <input type="email" placeholder="البريد الإلكتروني" className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]" />
          <input type="text" placeholder="رقم الهاتف" className="p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]" />
          <textarea rows="4" placeholder="تفاصيل المشاركة" className="p-3 resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f88b59f3] bg-[#ffffff15]"></textarea>

          <button className="bg-[#f88b598e] mt-2 py-2 text-white font-semibold hover:bg-[#d36d3f] transition">
            إرسال
          </button>
        </motion.form>
      )}

      <Footer />
    </div>
  );
}
