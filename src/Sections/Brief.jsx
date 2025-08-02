import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Brief() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="bg-[url('../../public/BriefCover.jpg')] w-full bg-fixed bg-cover bg-top h-[65vh] shadow-2xl"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="bg-[#000000b7] p-3 xl:p-10 pt-6 pb-6 sm:p-10 lg:p-28 w-full h-full flex flex-col xl:flex-row gap-4 lg:gap-10 items-center justify-center text-white">
        {/* Brief Logo */}
        <div className="flex flex-col font-bold text-[32px] md:text-[36px] lg:text-[54px] xl:bg-[#6fe7a15b] xl:ps-8 xl:pe-8 xl:p-4 xl:shadow-2xl">
          <p>{t("brief.title_line1")}</p>
          <p>{t("brief.title_line2")}</p>
          <p>{t("brief.title_line3")}</p>
        </div>

        {/* Main Brief */}
        <p className="p-4 bg-[#000000c5] border-2 sm:border-2 text-justify text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:p-17 shadow-2xl">
          {t("brief.description")}
        </p>
      </div>
    </div>
  );
}