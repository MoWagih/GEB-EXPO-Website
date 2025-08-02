import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GrLocationPin } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Expo1 from '../assets/imgs/expo1.jpg';
import Expo2 from '../assets/imgs/expo2.jpg';
import Expo3 from '../assets/imgs/expo3.png';
import Expo4 from '../assets/imgs/expo4.png';

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="relative h-screen xl:w-full flex flex-col justify-center gap-2 xl:p-8 overflow-hidden"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center animate-slide">
          <div className="absolute inset-0 bg-[#000000c0] bg-opacity-50"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center gap-2">
        {/* Main Title */}
        <div className="flex flex-col text-white text-center xl:text-start">
          <h1 className="text-[38px] sm:text-[48px] md:text-[58px] lg:text-[80px] xl:text-[78px] font-semibold drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <h2 className="pt-4 text-[16px] sm:text-[22px] lg:text-[32px] drop-shadow-lg">
            {t("hero.subtitle")}
          </h2>
        </div>

        {/* Date and Location */}
        <div className="flex flex-col sm:justify-center gap-2 sm:flex-row w-full xl:mt-4 xl:flex-col">
          {/* Date */}
          <div className="flex flex-col self-center xl:self-start gap-1 border w-[95%] sm:w-[30%] xl:w-[20%] text-center text-white">
            <div className="bg-[#f88b598e] flex flex-col p-2 sm:p-0 xl:p-1 items-center justify-evenly xl:flex-row">
              <p className="border-b-2 text-[32px] sm:text-[36px] lg:text-[55px] xl:text-[24px] xl:border-0">
                {t("hero.date")}
              </p>
              <p className="lg:text-[32px] xl:text-[18px]">{t("hero.month")}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex self-center xl:self-start border w-[95%] sm:w-[50%] xl:w-[30%] text-white">
            <div className="bg-[#0000008c] sm:flex-col sm:p-3 xl:flex-row text-center flex p-2 lg:p-5 items-center w-full justify-center gap-3 sm:gap-2 xl:p-2 rounded-lg">
              <GrLocationPin className="sm:text-[20px] lg:text-[36px] xl:text-[18px]" />
              <p className="sm:text-[18px] lg:text-[32px] xl:text-[18px]">
                {t("hero.location")}
              </p>
            </div>
          </div>
        </div>

        {/* Attendance */}
        <div className="w-[95%] sm:w-[85%] md:w-[80%] xl:w-[38%] xl:p-2 sm:ps-3 sm:pe-3 md:ps-6 md:pe-6 lg:ps-8 lg:pe-8 bg-white shadow-2xl mt-4 p-2 self-center xl:self-start text-black flex items-center justify-between font-semibold hover:bg-green-100 transition-colors duration-200">
          <Link to="/Register" className="w-full flex items-center justify-between">
            <h3 className="lg:text-[24px] xl:text-[18px]">{t("hero.register")}</h3>
            {i18n.language === "ar" ? (
              <FaArrowLeft className="lg:text-[24px] xl:text-[18px]" />
            ) : (
              <FaArrowRight className="lg:text-[24px] xl:text-[18px]" />
            )}
          </Link>
        </div>
      </div>

      {/* Custom CSS for Background Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            background-image: url(${Expo1});
          }
          25% {
            background-image: url(${Expo2});
          }
          50% {
            background-image: url(${Expo3});
          }
          75% {
            background-image: url(${Expo4});
          }
          100% {
            background-image: url(${Expo1});
          }
        }
        .animate-slide {
          animation: slide 20s infinite;
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}