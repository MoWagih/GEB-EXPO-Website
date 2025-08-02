import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import HeroImg from '../assets/imgs/expo4.png';
import Footer from '../Components/Footer';

export default function ContactPage() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="flex flex-col items-center justify-center gap-12 sm:gap-16 lg:gap-20"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      aria-label={t('contactPage.section_label')}
    >
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[80vh] pt-[80px] lg:pt-[100px]">
        <img
          src={HeroImg}
          alt={t('contactPage.hero_alt')}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            {t('contactPage.title')}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 max-w-2xl leading-relaxed">
            {t('contactPage.description')}
          </p>
        </div>
      </div>

      <motion.section
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        aria-label={t('contactPage.social_section')}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-500">
          {t('contactPage.social_title')}
        </h2>
        <div className="flex gap-6">
          {[
            {
              icon: <FaInstagram />,
              link: 'https://instagram.com',
              ariaLabel: t('contactPage.social.instagram'),
            },
            {
              icon: <FaLinkedin />,
              link: 'https://linkedin.com',
              ariaLabel: t('contactPage.social.linkedin'),
            },
            {
              icon: <FaXTwitter />,
              link: 'https://twitter.com',
              ariaLabel: t('contactPage.social.twitter'),
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-[#ffffff20] rounded-full text-2xl text-white hover:text-green-400 transition"
              whileHover={{ scale: 1.15 }}
              aria-label={item.ariaLabel}
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
        transition={{ duration: 0.7 }}
        aria-label={t('contactPage.form_section')}
      >
        <form
          className="bg-[#00000059] w-full max-w-2xl p-8 shadow-2xl flex flex-col gap-5 backdrop-blur-md"
          action="#"
          method="POST"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-green-500 text-center">
            {t('contactPage.form_title')}
          </h3>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-white text-sm sm:text-base"
            >
              {t('contactPage.form.name_label')}
            </label>
            <input
              required
              id="name"
              type="text"
              placeholder={t('contactPage.form.name_placeholder')}
              className="p-3 bg-[#ffffff15] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-white text-sm sm:text-base"
            >
              {t('contactPage.form.email_label')}
            </label>
            <input
              required
              id="email"
              type="email"
              placeholder={t('contactPage.form.email_placeholder')}
              className="p-3 bg-[#ffffff15] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              dir="ltr"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-white text-sm sm:text-base"
            >
              {t('contactPage.form.message_label')}
            </label>
            <textarea
              required
              id="message"
              rows="5"
              placeholder={t('contactPage.form.message_placeholder')}
              className="p-3 bg-[#ffffff15] resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="mt-2 p-3 bg-green-600 text-white text-lg font-semibold hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('contactPage.form.submit_button')}
          </motion.button>
        </form>
      </motion.section>

      <Footer />
    </div>
  );
}