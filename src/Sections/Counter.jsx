import React from 'react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';

export default function Counter() {
  const { t, i18n } = useTranslation();

  const highlights = [
    { number: 100, suffix: "+", label: t("counter.card1_label") },
    { number: 10, suffix: "", label: t("counter.card2_label") },
    { number: 4000, suffix: "+", label: t("counter.card3_label") },
    { number: 3, suffix: "", label: t("counter.card4_label") },
  ];

  return (
    <div
      className="bg-[#00000059] shadow-2xl w-full flex flex-col xl:flex-row justify-center items-center gap-4 lg:gap-8 p-3 pt-6 pb-6 lg:p-12 xl:p-10 text-white"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Title of Section */}
      <div className="flex flex-col font-bold text-[32px] md:text-[36px] lg:text-[54px] xl:bg-[#6fe7a15b] xl:ps-8 xl:pe-8 xl:p-4 xl:shadow-2xl">
        <p>{t("counter.title_line1")}</p>
        <p>{t("counter.title_line2")}</p>
        <p>{t("counter.title_line3")}</p>
      </div>

      {/* Counters */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:ps-7 xl:pe-7 gap-6 text-center">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-[#00000059] p-2 shadow-2xl text-white hover:scale-105 hover:border transition duration-300"
          >
            <h2 className="text-[#08c757] hover:text-[#FF7A00] text-[36px] lg:text-[42px] font-medium">
              <CountUp end={item.number} duration={3} suffix={item.suffix} />
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}