import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaHandshake,
} from "react-icons/fa";
import {
  MdOutlineMeetingRoom,
  MdOutlineWork,
} from "react-icons/md";
import Footer from "../Components/Footer";
import HeroImg from "../assets/imgs/expo1.jpg";

export default function ServicesPage() {
  const services = [
    {
      title: "استشارات مباشرة",
      icon: <FaUserGraduate className="text-4xl text-green-500 mb-4" />,
      description:
        "استشارات مباشرة حول البرامج الدراسية، المنح، شروط القبول، وخيارات التعليم العالي.",
    },
    {
      title: "قبول فوري",
      icon: <MdOutlineWork className="text-4xl text-green-500 mb-4" />,
      description:
        "فرصة للقبول الفوري في الجامعات والمؤسسات التعليمية المشاركة.",
    },
    {
      title: "قاعات الاجتماعات",
      icon: <MdOutlineMeetingRoom className="text-4xl text-green-500 mb-4" />,
      description:
        "قاعات مخصصة لعقد الاجتماعات واللقاءات التجارية وعرض المنتجات والتقنيات.",
    },
    {
      title: "الشبكات وبناء العلاقات",
      icon: <FaHandshake className="text-4xl text-green-500 mb-4" />,
      description:
        "بناء علاقات مع جامعات محلية ودولية وتعزيز التعاون في مجال التعليم.",
    },
    {
      title: "فرص العمل",
      icon: <MdOutlineWork className="text-4xl text-green-500 mb-4" />,
      description:
        "اكتشاف فرص التوظيف في الجامعات والمؤسسات التعليمية المشاركة.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-16 lg:gap-20">

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[80vh] pt-[80px] lg:pt-[100px]">
        <img
          src={HeroImg}
          alt="خدمات المعرض"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            خدمات وتسهيلات المعرض
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 max-w-2xl leading-relaxed">
            مجموعة شاملة من الخدمات لدعم العارضين والزوار – من استشارات وقبول
            فوري، إلى إقامة فندقية وتنقلات مريحة.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl px-4 lg:px-6 xl:px-8 py-12 lg:py-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#00000059] hover:border-1 hover:border-[#f5f5f5] shadow-lg hover:shadow-2xl p-6 text-center transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {service.icon}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-green-400">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
