import React from 'react';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { GiProgression } from 'react-icons/gi';
import { GrServices } from 'react-icons/gr';
import { SiKnowledgebase } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export default function Goals() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="bg-[#00000040] w-full shadow-2xl p-3 pt-6 pb-6 sm:p-10 flex flex-col xl:flex-row items-center gap-3 lg:gap-8 text-white"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Title of Section */}
      <div className="flex flex-col font-bold text-[32px] md:text-[36px] lg:text-[54px] xl:bg-[#6fe7a15b] xl:ps-8 xl:pe-8 xl:p-4 xl:shadow-2xl">
        <p>{t("goals.title_line1")}</p>
        <p>{t("goals.title_line2")}</p>
      </div>

      {/* Cards */}
      <div className="flex flex-col xl:p-2 md:flex-row md:flex-wrap w-full gap-3">
        {/* Card 1 */}
        <div className="bg-[#00000059] w-full md:w-[48%] xl:w-[48%] p-4 flex flex-col items-center justify-center gap-2 shadow-2xl hover:scale-105 hover:border transition duration-300">
          <SiKnowledgebase className="text-[#08c757] hover:text-[#FF7A00] text-[28px] lg:text-[34px]" />
          <h2 className="font-medium lg:text-[28px] xl:text-[18px]">{t("goals.card1_title")}</h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:text-[16px] text-center">
            {t("goals.card1_description")}
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#00000059] w-full md:w-[48%] xl:w-[48%] p-4 flex flex-col items-center justify-center gap-2 shadow-2xl hover:scale-105 hover:border transition duration-300">
          <GiProgression className="text-[#08c757] hover:text-[#FF7A00] text-[28px] lg:text-[34px]" />
          <h2 className="font-medium lg:text-[28px] xl:text-[18px]">{t("goals.card2_title")}</h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:text-[16px] text-center">
            {t("goals.card2_description")}
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#00000059] w-full md:w-[48%] xl:w-[48%] p-4 flex flex-col items-center justify-center gap-2 shadow-2xl hover:scale-105 hover:border transition duration-300">
          <FaUsersViewfinder className="text-[#08c757] hover:text-[#FF7A00] text-[28px] lg:text-[34px]" />
          <h2 className="font-medium lg:text-[28px] xl:text-[18px]">{t("goals.card3_title")}</h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:text-[16px] text-center">
            {t("goals.card3_description")}
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#00000059] w-full md:w-[48%] xl:w-[48%] p-4 flex flex-col items-center justify-center gap-2 shadow-2xl hover:scale-105 hover:border transition duration-300">
          <GrServices className="text-[#08c757] hover:text-[#FF7A00] text-[28px] lg:text-[34px]" />
          <h2 className="font-medium lg:text-[28px] xl:text-[18px]">{t("goals.card4_title")}</h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:text-[16px] text-center">
            {t("goals.card4_description")}
          </p>
        </div>
      </div>
    </div>
  );
}