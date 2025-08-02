import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroImg from '../assets/imgs/expo2.jpg';
import Footer from '../Components/Footer';

export default function ProgramPage() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="flex flex-col items-center justify-center gap-12 sm:gap-16 lg:gap-20 xl:gap-24"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      aria-label={t('programPage.section_label')}
    >
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[100vh] pt-[80px] lg:pt-[100px]">
        <img
          src={HeroImg}
          alt={t('programPage.hero_alt')}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-[#000000d3] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            {t('programPage.title')}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed">
            {t('programPage.description')}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}