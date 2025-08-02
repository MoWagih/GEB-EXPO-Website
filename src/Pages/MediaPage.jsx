import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Footer from '../Components/Footer';
import MediaCover from '../assets/imgs/equipment-empty-musical-recording-room.jpg';
import img1 from '../assets/imgs/Saudi-News-01.png';
import img2 from '../assets/imgs/شعار_قناة_السعودية.png';
import img3 from '../assets/imgs/Saudi-Brodcasting-Corporation.png';
import img4 from '../assets/imgs/MBC.png';
import img5 from '../assets/imgs/روتانا.jpg';
import img6 from '../assets/imgs/Saudi_Research_and_Media_Group_New_Logo.png';
import img7 from '../assets/imgs/Sabq-01-01.png';
import img8 from '../assets/imgs/صحيفة_مال.jpg';
import img9 from '../assets/imgs/Okaz-01.png';
import img10 from '../assets/imgs/Ml_tv.jpeg';
import img11 from '../assets/imgs/Eye-of-Riyadh-01.png';
import img12 from '../assets/imgs/مزاج_اف_ام.jpg';
import img13 from '../assets/imgs/جريدة_المدينة.png';

const mediaPartners = [
  { src: img1, altKey: 'mediaPartners.saudi_news' },
  { src: img2, altKey: 'mediaPartners.saudi_channel' },
  { src: img3, altKey: 'mediaPartners.saudi_broadcasting' },
  { src: img4, altKey: 'mediaPartners.mbc' },
  { src: img5, altKey: 'mediaPartners.rotana' },
  { src: img6, altKey: 'mediaPartners.saudi_research' },
  { src: img7, altKey: 'mediaPartners.sabq' },
  { src: img8, altKey: 'mediaPartners.mal' },
  { src: img9, altKey: 'mediaPartners.okaz' },
  { src: img10, altKey: 'mediaPartners.ml_tv' },
  { src: img11, altKey: 'mediaPartners.eye_of_riyadh' },
  { src: img12, altKey: 'mediaPartners.mizaj_fm' },
  { src: img13, altKey: 'mediaPartners.al_madina' },
];

export default function MediaPage() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="flex flex-col items-center justify-center gap-12 sm:gap-16 lg:gap-20"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      aria-label={t('mediaPage.section_label')}
    >
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[80vh] pt-[80px] lg:pt-[100px]">
        <img
          src={MediaCover}
          alt={t('mediaPage.hero_alt')}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#000000c7] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            {t('mediaPage.title')}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 max-w-2xl leading-relaxed">
            {t('mediaPage.description')}
          </p>
        </div>
      </div>

      <motion.section
        className="max-w-4xl text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        aria-label={t('mediaPage.news_section')}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-500 mb-6">
          {t('mediaPage.news_title')}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
          {t('mediaPage.news_description')}
        </p>
      </motion.section>

      <motion.section
        className="w-full py-12 px-6 text-center bg-[#fffffffa]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        aria-label={t('mediaPage.partners_section')}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-400 mb-8">
          {t('mediaPage.partners_title')}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {mediaPartners.map((partner, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center hover:scale-105 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              aria-label={t(partner.altKey)}
            >
              <img
                src={partner.src}
                alt={t(partner.altKey)}
                className="h-16 sm:h-20 lg:h-24 object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="max-w-5xl text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        aria-label={t('mediaPage.highlights_section')}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-500 mb-6">
          {t('mediaPage.highlights_title')}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
          {t('mediaPage.highlights_description')}
        </p>
      </motion.section>

      <motion.section
        className="max-w-4xl text-center px-4 pb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-label={t('mediaPage.contact_section')}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-400 mb-4">
          {t('mediaPage.contact_title')}
        </h2>
        <p className="text-gray-200 mb-4">
          {t('mediaPage.contact_description')}
        </p>
        <div className="flex flex-col gap-3">
          <p
            className="text-lg flex items-center justify-center gap-3 font-semibold xl:text-[22px] text-green-400"
            dir="ltr"
          >
            <HiOutlineMail /> info@geb-expo.com
          </p>
          <p
            className="text-lg flex items-center justify-center gap-3 font-semibold xl:text-[22px] text-green-400"
            dir="ltr"
          >
            <HiOutlinePhone /> +966575056525
          </p>
          <p
            className="text-lg flex items-center justify-center gap-3 font-semibold xl:text-[22px] text-green-400"
            dir="ltr"
          >
            <HiOutlinePhone /> +601160501948
          </p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}