import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default function Program() {
  return (
    <div className='bg-[#00000040] shadow-2xl w-full flex flex-col xl:flex-row justify-center items-center gap-4 lg:gap-8 p-3 pt-6 pb-6 lg:p-12 xl:p-10 text-white'>
       {/* Title of Section */}
       <div className="flex flex-col font-bold text-[32px] md:text-[36px] lg:text-[54px] xl:bg-[#6fe7a15b] xl:ps-8 xl:pe-8 xl:p-4 xl:shadow-2xl">
            <p>لمحـــــــــة</p>
            <p>عـــــــــــــن</p>
            <p>البرنامـــــج</p>
        </div>

        {/* Words and CTA */}
        <div className='flex flex-col items-center justify-center sm:pe-12 sm:ps-12 md:ps-22 md:pe-22'>
            <p className='text-justify text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] p-2'>يقدّم معرض GEB Expo برنامجًا متنوعًا من الفعاليات على مدار ثلاثة أيام، يشمل ورش عمل تفاعلية، جلسات حوارية مع خبراء التعليم، وعروضًا مميزة من الجامعات المشاركة.</p>

            <div className='w-[95%] sm:w-[85%] md:w-[80%] xl:w-[45%] xl:p-2 sm:ps-3 sm:pe-3 md:ps-6 md:pe-6 lg:ps-8 lg:pe-8 bg-white shadow-2xl mt-4 p-2 self-center xl:self-start text-black flex items-center justify-between font-semibold'>
                <h3 className='lg:text-[24px] xl:text-[18px]'>اعــرف المزيــد</h3>
                <FaArrowLeft className='lg:text-[24px] xl:text-[18px]' />
             </div>

        </div>
    </div>
  )
}
