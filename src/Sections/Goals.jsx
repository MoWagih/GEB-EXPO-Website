import React from 'react'
import { FaUsersViewfinder } from 'react-icons/fa6'
import { GiProgression } from 'react-icons/gi'
import { GrServices } from 'react-icons/gr'
import { SiKnowledgebase } from 'react-icons/si'

export default function Goals() {
  return (
    <div className='bg-[#0000002c] w-full shadow-2xl p-3 pt-6 pb-6 sm:p-10 flex flex-col xl:flex-row items-center gap-3 lg:gap-8 text-white'>
        {/* Title of Section */}
        <div className="flex flex-col font-bold text-[32px] md:text-[36px] lg:text-[54px] xl:bg-[#6fe7a15b] xl:ps-8 xl:pe-8 xl:p-4 xl:shadow-2xl">
            <p>أهــــــداف</p>
            <p>المعــــرض</p>
        </div>

        {/* Cards */}
       <div className='flex flex-col xl:p-2 md:flex-row md:flex-wrap w-full gap-3'>
             {/* Card 1 */}
                <div className='bg-[#00000059] w-full md:w-[48%] xl:w-[48%] p-4 flex flex-col items-center justify-center gap-2 shadow-2xl'>
                    {/* Icon */}
                    <SiKnowledgebase className='text-[#09a149] text-[28px] lg:text-[34px]' />

                    {/* Title */}
                    <h2 className='font-medium lg:text-[28px] xl:text-[18px]'>التعريـف</h2>

                    {/* Description */}
                    <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:text-[16px] text-center'>ملتقى للطلاب والمؤسسات التعليمية المتميزة</p>
                </div>

                 {/* Card 2 */}
                 <div className='bg-[#00000059] w-full md:w-[48%] xl:w-[48%] p-4 flex flex-col items-center justify-center gap-2 shadow-2xl'>
                    {/* Icon */}
                    <GiProgression className='text-[#09a149] text-[28px] lg:text-[34px]' />

                    {/* Title */}
                    <h2 className='font-medium lg:text-[28px] xl:text-[18px]'>توفيــر</h2>

                    {/* Description */}
                    <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:text-[16px] text-center'>فرصة للقاء ممثلي اكثر من 100 جامعة عالمية</p>
                </div>

                {/* Card 3 */}
                <div className='bg-[#00000059] w-full md:w-[48%] xl:w-[48%] p-4 flex flex-col items-center justify-center gap-2 shadow-2xl'>
                    {/* Icon */}
                    <FaUsersViewfinder className='text-[#09a149] text-[28px] lg:text-[34px]' />

                    {/* Title */}
                    <h2 className='font-medium lg:text-[28px] xl:text-[18px]'>إيجــاد</h2>

                    {/* Description */}
                    <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:text-[16px] text-center'>استشارات مباشرة حول البرامج الدراسية، والمنح وشروط القبول</p>
                </div>

                {/* Card 4 */}
                <div className='bg-[#00000059] w-full md:w-[48%] xl:w-[48%] p-4 flex flex-col items-center justify-center gap-2 shadow-2xl'>
                    {/* Icon */}
                    <FaUsersViewfinder className='text-[#09a149] text-[28px] lg:text-[34px]' />

                    {/* Title */}
                    <h2 className='font-medium lg:text-[28px] xl:text-[18px]'>دعــم</h2>

                    {/* Description */}
                    <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:text-[16px] text-center'>التعاون العالمي في مجال التعليم</p>
                </div>
       </div>

        
    </div>
  )
}
