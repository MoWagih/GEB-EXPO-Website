
export default function Brief() {
  return (
    <div className="bg-[url('../../public/BriefCover.jpg')] bg-fixed bg-cover bg-top h-[65vh] shadow-2xl">
        <div className="bg-[#000000b7] p-3 pt-6 pb-6 sm:p-10 lg:p-28 w-full h-[100%] flex flex-col xl:flex-row gap-4 lg:gap-10 items-center justify-center text-white">
            {/* Brief Logo */}
            <div className="flex flex-col font-bold text-[32px] md:text-[36px] lg:text-[54px] xl:bg-[#6fe7a15b] xl:ps-8 xl:pe-8 xl:p-4 xl:shadow-2xl">
                <p>نبـــــــــذة</p>
                <p>عـــــــــــن</p>
                <p>المعــرض</p>
            </div>

            {/* Main Brief */}
            <p className="p-4 bg-[#000000c5] border-2 sm:border-2 text-justify text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:p-17 shadow-2xl">سيقام المعرض في الفترة من 16 - 18 نوفمبر في قاعة المؤتمرات بفندق ماريوت الرياض، ويستضيف العديد من الجامعات والمؤسسات التعليمية المحلية والعالمية المرموقة وطلابنا الطموحين الذين هم جيل المستقبل.</p>
        </div>
    </div>
  )
}
