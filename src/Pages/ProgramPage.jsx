import React from "react";
import { motion } from "framer-motion";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiPresentationLine } from "react-icons/ri";
import HeroImg from '../assets/imgs/expo2.jpg'
import Footer from "../Components/Footer";

export default function ProgramPage() {
  const days = [
    {
      title: "اليوم الإفتتاحي",
      icon: <FaRegHandshake className="text-4xl text-green-600 mb-4" />,
      description: "حفل افتتاح رسمي وخطابات من مسؤولين حكوميين وشركات مشاركة.",
    },
    {
      title: "اليوم الثاني",
      icon: <MdOutlineWork className="text-4xl text-green-600 mb-4" />,
      description: "ورش عمل وعروض لأحدث التقنيات والمنتجات.",
    },
    {
      title: "اليوم الثالث",
      icon: <RiPresentationLine className="text-4xl text-green-600 mb-4" />,
      description: "عروض تقديمية عن أحدث المنتجات والحلول وحفل الختام.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] pt-[80px] lg:pt-[100px]">
        {/* 🔥 صورة البانر */}
        <img
          src={HeroImg}   
          alt="برنامج المعرض"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#000000d3] bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            برنامج المعرض
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed">
            ثلاثة أيام من الفعاليات والأنشطة الملهمة — من حفل الافتتاح الرسمي إلى ورش العمل والعروض التقنية.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-2 py-16 lg:py-20">
        {days.map((day, index) => (
          <motion.div
            key={index}
            className="bg-[#00000059] shadow-2xl p-6 text-center hover:border-1 border-[#e9e9e9] hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >

            {day.icon}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-green-600">
              {day.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white">
              {day.description}
            </p>
          </motion.div>

        ))}
      </div>

      <Footer />
    </div>
  );
}
