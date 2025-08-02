import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../public/Logo.png';

export default function JoinExpo() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="w-full flex flex-col p-4 pt-8 pb-8 xl:pt-8 xl:pb-8 gap-2 xl:gap-6 xl:ps-10 xl:pe-10 bg-[#000000a4] shadow-2xl justify-center items-center text-white"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <img
        className="w-[80%] sm:w-[60%] md:w-[45%] lg:w-[40%] xl:w-[25%]"
        src={logo}
        alt={t('joinExpo.logo_alt')}
        loading="lazy"
      />

      {/* Title of Section */}
      <div className="flex flex-col text-center font-semibold text-[18px] md:text-[36px] lg:text-[44px] xl:ps-8 xl:pe-8 xl:p-1">
        <p>{t('joinExpo.title_line1')}</p>
        <p className="text-[#08c757] text-[32px] lg:text-[44px]">{t('joinExpo.title_line2')}</p>
      </div>

      {/* CTA and Words */}
      <div className="flex flex-col xl:w-[50%] gap-0.5 sm:gap-1.5 justify-center items-center p-1 sm:ps-12 sm:pe-12 md:ps-22 md:pe-22 xl:p-0 text-center">
        {/* Words */}
        <p className="text-[14px] sm:text-[15px] lg:text-[22px] xl:text-[22px] xl:text-center">
          {t('joinExpo.description')}
        </p>

        {/* CTA */}
        <div className="w-[95%] sm:w-[85%] md:w-[60%] xl:w-[100%] xl:p-2 xl:ps-6 xl:pe-6 sm:ps-3 sm:pe-3 md:ps-6 md:pe-6 lg:ps-8 lg:pe-8 bg-white shadow-2xl mt-4 p-2 self-center text-black flex items-center justify-between font-semibold">
          <Link to="/Register" className="w-full flex items-center justify-between">
            <h3 className="lg:text-[24px] xl:text-[18px]">{t('joinExpo.cta')}</h3>
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