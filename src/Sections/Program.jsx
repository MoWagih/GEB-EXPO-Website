import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Program() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="bg-[#00000040] shadow-2xl w-full flex flex-col xl:flex-row justify-center items-center gap-4 lg:gap-8 p-3 pt-6 pb-6 lg:p-12 xl:p-10 text-white"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Title of Section */}
      <div className="flex flex-col font-bold text-[32px] md:text-[36px] lg:text-[54px] xl:bg-[#6fe7a15b] xl:ps-8 xl:pe-8 xl:p-4 xl:shadow-2xl">
        <p>{t('program.title_line1')}</p>
        <p>{t('program.title_line2')}</p>
        <p>{t('program.title_line3')}</p>
      </div>

      {/* Words and CTA */}
      <div className="flex flex-col items-center justify-center sm:pe-12 sm:ps-12 md:ps-22 md:pe-22">
        <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] p-2">
          {t('program.description')}
        </p>

        <div className="w-[95%] sm:w-[85%] md:w-[80%] xl:w-[45%] xl:p-2 sm:ps-3 sm:pe-3 md:ps-6 md:pe-6 lg:ps-8 lg:pe-8 bg-white shadow-2xl mt-4 p-2 self-center xl:self-start text-black flex items-center justify-between font-semibold">
          <Link to="/Program" className="flex items-center justify-between w-full">
            <h3 className="lg:text-[24px] xl:text-[18px]">{t('program.cta')}</h3>
            {i18n.language === 'ar' ? (
              <FaArrowLeft className="lg:text-[24px] xl:text-[18px]" />
            ) : (
              <FaArrowRight className="lg:text-[24px] xl:text-[18px]" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}