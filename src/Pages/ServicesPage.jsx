import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaUserGraduate, FaHandshake } from 'react-icons/fa';
import { MdOutlineMeetingRoom, MdOutlineWork } from 'react-icons/md';
import Footer from '../Components/Footer';
import HeroImg from '../assets/imgs/expo1.jpg';

export default function ServicesPage() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      title: t('servicesPage.services.consultations.title'),
      icon: <FaUserGraduate className="text-4xl text-green-500 mb-4" />,
      description: t('servicesPage.services.consultations.description'),
    },
    {
      title: t('servicesPage.services.instant_admission.title'),
      icon: <MdOutlineWork className="text-4xl text-green-500 mb-4" />,
      description: t('servicesPage.services.instant_admission.description'),
    },
    {
      title: t('servicesPage.services.meeting_rooms.title'),
      icon: <MdOutlineMeetingRoom className="text-4xl text-green-500 mb-4" />,
      description: t('servicesPage.services.meeting_rooms.description'),
    },
    {
      title: t('servicesPage.services.networking.title'),
      icon: <FaHandshake className="text-4xl text-green-500 mb-4" />,
      description: t('servicesPage.services.networking.description'),
    },
    {
      title: t('servicesPage.services.job_opportunities.title'),
      icon: <MdOutlineWork className="text-4xl text-green-500 mb-4" />,
      description: t('servicesPage.services.job_opportunities.description'),
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center gap-12 sm:gap-16 lg:gap-20"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      aria-label={t('servicesPage.section_label')}
    >
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[80vh] pt-[80px] lg:pt-[100px]">
        <img
          src={HeroImg}
          alt={t('servicesPage.hero_alt')}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            {t('servicesPage.title')}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 max-w-2xl leading-relaxed">
            {t('servicesPage.description')}
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
            aria-label={service.title}
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