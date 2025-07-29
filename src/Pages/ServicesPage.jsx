import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaHandshake,
  FaLanguage,
  FaCoffee,
  FaHotel,
  FaShuttleVan,
  FaPassport,
} from "react-icons/fa";
import {
  MdOutlineMeetingRoom,
  MdOutlineWork,
  MdOutlineBreakfastDining,
} from "react-icons/md";
import Footer from "../Components/Footer";
import HeroImg from "../assets/imgs/expo1.jpg";

export default function ServicesPage() {
  const services = [
    {
      title: "استشارات مباشرة",
      icon: <FaUserGraduate className="text-4xl text-green-600 mb-4" />,
      description:
        "استشارات مباشرة حول البرامج الدراسية، المنح، شروط القبول، وخيارات التعليم العالي.",
    },
    {
      title: "قبول فوري",
      icon: <MdOutlineWork className="text-4xl text-green-600 mb-4" />,
      description:
        "فرصة للقبول الفوري في الجامعات والمؤسسات التعليمية المشاركة.",
    },
    {
      title: "قاعات الاجتماعات",
      icon: <MdOutlineMeetingRoom className="text-4xl text-green-600 mb-4" />,
      description:
        "قاعات مخصصة لعقد الاجتماعات واللقاءات التجارية وعرض المنتجات والتقنيات.",
    },
    {
      title: "خدمات الضيافة",
      icon: <FaCoffee className="text-4xl text-green-600 mb-4" />,
      description:
        "توفير الضيافة من طعام وشراب وخدمات مرافقة مثل التصوير والترجمة.",
    },
    {
      title: "الشبكات وبناء العلاقات",
      icon: <FaHandshake className="text-4xl text-green-600 mb-4" />,
      description:
        "بناء علاقات مع جامعات محلية ودولية وتعزيز التعاون في مجال التعليم.",
    },
    {
      title: "فرص العمل",
      icon: <MdOutlineWork className="text-4xl text-green-600 mb-4" />,
      description:
        "اكتشاف فرص التوظيف في الجامعات والمؤسسات التعليمية المشاركة.",
    },

    {
      title: "بوث بمساحة ٩ متر مربع",
      icon: <MdOutlineMeetingRoom className="text-4xl text-green-600 mb-4" />,
      description: "مساحة مخصصة للعارضين داخل المعرض مع تجهيزات كاملة للعرض.",
    },
    {
      title: "إقامة فندقية",
      icon: <FaHotel className="text-4xl text-green-600 mb-4" />,
      description:
        "إقامة فندقية طوال أيام المعرض في فنادق مميزة بالقرب من موقع الفعالية.",
    },
    {
      title: "تنقلات من الفندق إلى المعرض",
      icon: <FaShuttleVan className="text-4xl text-green-600 mb-4" />,
      description:
        "خدمة تنقلات مريحة للعارضين والزوار بين الفندق ومكان المعرض.",
    },
    {
      title: "وجبة الإفطار",
      icon: (
        <MdOutlineBreakfastDining className="text-4xl text-green-600 mb-4" />
      ),
      description: "وجبات إفطار يومية مقدمة لجميع المشاركين في المعرض.",
    },
    {
      title: "تأشيرة الدخول للسعودية",
      icon: <FaPassport className="text-4xl text-green-600 mb-4" />,
      description: "تسهيل إصدار تأشيرات الدخول للمشاركين من خارج المملكة.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 items-center justify-center">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] pt-[80px] lg:pt-[100px]">
        {/* صورة البانر */}
        <img
          src={HeroImg}
          alt="خدمات المعرض"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            خدمات وتسهيلات المعرض
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed">
            مجموعة شاملة من الخدمات لدعم العارضين والزوار – من استشارات وقبول
            فوري، إلى إقامة فندقية وتنقلات مريحة.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2 py-16 lg:py-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#00000059] shadow-2xl p-6 text-center  hover:border-1 border-[#e9e9e9] hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* أيقونة + عنوان + وصف */}
            {service.icon}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-green-600">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
