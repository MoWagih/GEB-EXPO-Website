import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaCalendarAlt, FaUniversity, FaBullseye, FaLightbulb } from 'react-icons/fa';
import HeroImg from '../assets/imgs/expo3.png';
import Carezma from '../assets/imgs/carezma logo.png';
import Riep from '../assets/imgs/RIEP.png';
import Footer from '../Components/Footer';

export default function AboutPage() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="flex flex-col items-center justify-center"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      aria-label={t('aboutPage.section_label')}
    >
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[80vh] pt-[80px] lg:pt-[100px]">
        <img
          src={HeroImg}
          alt={t('aboutPage.hero_alt')}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('aboutPage.title')}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed">
            {t('aboutPage.description')}
          </p>
        </div>
      </div>

      <motion.section
        className="w-full max-w-5xl text-center py-12 px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        aria-label={t('aboutPage.overview_section')}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-500 mb-6">
          {t('aboutPage.overview_title')}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
          {t('aboutPage.overview_description')}
        </p>
      </motion.section>

      <motion.section
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8 lg:px-12 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        aria-label={t('aboutPage.details_section')}
      >
        {[
          {
            icon: <FaMapMarkerAlt className="text-4xl text-green-600 mb-2" />,
            title: t('aboutPage.details.location.title'),
            text: t('aboutPage.details.location.text'),
          },
          {
            icon: <FaCalendarAlt className="text-4xl text-green-600 mb-2" />,
            title: t('aboutPage.details.date.title'),
            text: t('aboutPage.details.date.text'),
          },
          {
            icon: <FaUniversity className="text-4xl text-green-600 mb-2" />,
            title: t('aboutPage.details.content.title'),
            text: t('aboutPage.details.content.text'),
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#00000059] p-6 hover:border-1 hover:border-[#f5f5f5] text-center shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            aria-label={item.title}
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
        aria-label={t('aboutPage.vision_mission_section')}
      >
        {[
          {
            icon: <FaBullseye className="text-5xl text-green-600 mb-3" />,
            title: t('aboutPage.vision.title'),
            text: t('aboutPage.vision.text'),
          },
          {
            icon: <FaLightbulb className="text-5xl text-green-600 mb-3" />,
            title: t('aboutPage.mission.title'),
            text: t('aboutPage.mission.text'),
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#00000059] p-6 hover:border-1 hover:border-[#f5f5f5] text-center shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            aria-label={card.title}
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
        aria-label={t('aboutPage.why_saudi_section')}
      >
        <div className="bg-[#00000059] max-w-5xl w-full text-center shadow-2xl p-8 hover:border-1 hover:border-[#f5f5f5] backdrop-blur-sm">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
            {t('aboutPage.why_saudi_description')}
          </p>
        </div>
      </motion.section>

      <motion.section
        className="w-full flex flex-col items-center px-6 sm:px-8 lg:px-12 pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        aria-label={t('aboutPage.organizers_section')}
      >
        <div className="bg-[#00000059] max-w-5xl w-full text-center shadow-2xl p-8 hover:border-1 hover:border-[#f5f5f5] backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-400 mb-4">
            {t('aboutPage.organizers_title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100 mb-6">
            {t('aboutPage.organizers_description', {
              expo: 'GEB Expo 2025',
              carezma: 'كاريزما',
              riep: 'الابتكار',
            })}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-6">
            <img
              src={Carezma}
              alt={t('footer.carezma_alt')}
              className="h-24 sm:h-32 lg:h-36 object-contain"
              loading="lazy"
            />
            <img
              src={Riep}
              alt={t('footer.riep_alt')}
              className="h-24 sm:h-32 lg:h-36 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}