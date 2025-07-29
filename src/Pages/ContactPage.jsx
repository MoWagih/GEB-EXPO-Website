import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import HeroImg from "../assets/imgs/expo4.png"
import Footer from "../Components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center">

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] pt-[80px] lg:pt-[100px]">
        <img
          src={HeroImg} 
          alt="تواصل معنا"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            تواصل معنا
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed">
            نحن هنا للإجابة على كل استفساراتك — تواصل معنا عبر النموذج أو من خلال وسائل التواصل الاجتماعي.
          </p>
        </div>
      </div>

      <motion.section
        className="flex flex-col items-center py-12 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-500">
          تابعنا على وسائل التواصل
        </h2>
        <div className="flex gap-6 text-white text-3xl">
          {[
            { icon: <FaInstagram />, link: "https://instagram.com" },
            { icon: <FaLinkedin />, link: "https://linkedin.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition transform hover:scale-110"
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="w-full flex justify-center px-4 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <form className="bg-[#00000059] w-full max-w-2xl p-8 shadow-2xl flex flex-col gap-4">
          <h3 className="text-2xl text-green-500 font-semibold text-center mb-2">
            ارسل لنا رسالة
          </h3>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white text-sm">الاسم</label>
            <input
              id="name"
              type="text"
              placeholder="اكتب اسمك هنا"
              className="p-3 bg-[#ffffff15] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white text-sm">البريد الإلكتروني</label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="p-3 bg-[#ffffff15] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-white text-sm">الرسالة</label>
            <textarea
              id="message"
              rows="5"
              placeholder="اكتب رسالتك هنا..."
              className="p-3 bg-[#ffffff15] resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="mt-4 p-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            إرسال
          </motion.button>
        </form>
      </motion.section>

      <Footer />
    </div>
  );
}
