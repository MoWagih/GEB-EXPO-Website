import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUniversity,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";
import HeroImg from "../assets/imgs/expo3.png";
import Carezma from "../assets/imgs/carezma logo.png";
import Riep from "../assets/imgs/RIEP.png";
import Footer from "../Components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[80vh] pt-[80px] lg:pt-[100px]">
        <img
          src={HeroImg}
          alt="عن المعرض"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            عن معرض GEB Expo
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed">
            أكبر منصة تعليمية في المنطقة تجمع الجامعات، المدارس، والخبراء في حدث
            واحد لعرض أحدث الفرص الأكاديمية والتقنيات التعليمية.
          </p>
        </div>
      </div>

      <motion.section
        className="w-full max-w-5xl text-center py-12 px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-500 mb-6">
          لمحة عن المعرض
        </h2>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
          معرض GEB Expo 2025 هو منصة رائدة في مجال التعليم تهدف إلى ربط المؤسسات
          الأكاديمية المحلية والدولية مع الطلاب والباحثين عن فرص تعليمية. الحدث
          يوفر مساحة للتواصل، تبادل الأفكار، واستكشاف أحدث الابتكارات والحلول
          التعليمية.
        </p>
      </motion.section>

      <motion.section
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8 lg:px-12 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            icon: <FaMapMarkerAlt className="text-4xl text-green-600 mb-2" />,
            title: "الموقع",
            text: "الرياض - فندق الماريوت",
          },
          {
            icon: <FaCalendarAlt className="text-4xl text-green-600 mb-2" />,
            title: "التاريخ",
            text: "16 - 18 نوفمبر 2025",
          },
          {
            icon: <FaUniversity className="text-4xl text-green-600 mb-2" />,
            title: "المحتوى",
            text: "جامعات، مدارس، وتقنيات تعليمية",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#00000059] p-6 hover:border-1 hover:border-[#f5f5f5] text-center shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-green-500">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-100">{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 sm:px-8 lg:px-12 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            icon: <FaBullseye className="text-5xl text-green-600 mb-3" />,
            title: "رؤيتنا",
            text: "نحن هنا لنكتب معا ً فصلا ً جديدا من فصول التعاون العالمي في مجالٍ ، قادر على قيادة تحولات المستقبل ٍ التعليم، ونساهم في بناء جيل واع بعلومه ومهاراته",
          },
          {
            icon: <FaLightbulb className="text-5xl text-green-600 mb-3" />,
            title: "رسالتنا",
            text: "تمكين الطلاب والمؤسسات الأكاديمية من التواصل، التعلم، والاستفادة من أحدث الحلول التعليمية.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#00000059] p-6 hover:border-1 hover:border-[#f5f5f5] text-center shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {card.icon}
            <h3 className="text-2xl font-semibold text-green-500 mb-2">{card.title}</h3>
            <p className="text-sm sm:text-base text-gray-100">{card.text}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        className="w-full flex justify-center px-6 sm:px-8 lg:px-12 pb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-[#00000059] max-w-5xl w-full text-center shadow-2xl p-8 hover:border-1 hover:border-[#f5f5f5] backdrop-blur-sm">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
            تعتبر المملكة العربية السعودية من افضل الدول المضيفة للمعارض التعليمية
            لعدة عوامل منها البنية التحتية المتطورة واهتمام المملكة بالتعليم حيث تعتبر
            المعارض جزءا أساسيا من جهودها لتعزيز جودة التعليم إضافة للموقع الجغرافي
            الاستراتيجي المتميز مما يجعلها وجهة سهلة للوصول إليها من كافة بقاع الأرض
            وتتميز كذلك بارتفاع الطلب علي التعليم.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="w-full flex flex-col items-center px-6 sm:px-8 lg:px-12 pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-[#00000059] max-w-5xl w-full text-center shadow-2xl p-8 hover:border-1 hover:border-[#f5f5f5] backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-400 mb-4">
            منظم المعرض
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100 mb-6">
            تـنظيم الـمعرض من خلال
            <span className="text-green-400 font-semibold"> GEB Expo 2025 </span>
            بواسطة شركة
            <span className="text-green-400 font-semibold"> كاريزمــا </span>
            وشركة
            <span className="text-green-400 font-semibold"> الابتكــار </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-6">
            <img
              src={Carezma}
              alt="Carezma Logo"
              className="h-24 sm:h-32 lg:h-36 object-contain"
            />
            <img
              src={Riep}
              alt="RIEP Logo"
              className="h-24 sm:h-32 lg:h-36 object-contain"
            />
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
