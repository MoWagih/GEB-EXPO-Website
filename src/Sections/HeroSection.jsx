import { FaArrowLeft } from 'react-icons/fa'
import { GrLocationPin } from 'react-icons/gr'

export default function () {
  return (
    <div className='h-[100vh] flex flex-col justify-center gap-2'>
        {/* Main Title */}
       <div className='flex flex-col text-white text-center xl:text-start'>
            <h1 className='text-[38px] sm:text-[48px] md:text-[58px] lg:text-[80px] xl:text-[78px] font-semibold'>اكتشــــــــــف مستقبلــــــك التعليمــــــــي</h1>
            <h2 className='pt-4 text-[16px] sm:text-[22px] lg:text-[32px]'> مــع أبـــرز الجامعـــات العالميـــة</h2>
       </div>


        {/* Date and Location */}
        <div className='flex flex-col sm:justify-center gap-2 sm:flex-row w-full xl:mt-4 xl:flex-col'>
            {/* Date */}
            <div className='flex flex-col self-center xl:self-start gap-1 border-1 w-[95%] sm:w-[30%] xl:w-[20%] text-center text-white'>
             {/* Date */}
                <div className='bg-[#f88b598e] flex flex-col p-2 sm:p-0 xl:p-1 items-center justify-evenly xl:flex-row'>
                    <p className='border-b-2 text-[32px] sm:text-[36px] lg:text-[55px] xl:text-[24px] xl:border-0'>16 - 18</p>
                    <p className='lg:text-[32px] xl:text-[18px]'>نوفمبر 2025</p>
                </div>
            </div>

            {/* Location */}
            <div className='flex self-center xl:self-start border-1 w-[95%] sm:w-[50%] xl:w-[30%] text-white'>
             {/* Location */}
                <div className='bg-[#0000008c] sm:flex-col sm:p-3 xl:flex-row text-center flex p-2 lg:p-5 items-center w-full justify-center gap-3 sm:gap-2 xl:p-2'>
                    <GrLocationPin className='sm:text-[20px] lg:text-[36px] xl:text-[18px]' />
                    <p className='sm:text-[18px] lg:text-[32px] xl:text-[18px]'>الريـاض - فنـدق الماريـوت</p>
                </div>
            </div>
        </div>
        
       {/* Attendance */}
       <div className='w-[95%] sm:w-[85%] md:w-[80%] xl:w-[38%] xl:p-2 sm:ps-3 sm:pe-3 md:ps-6 md:pe-6 lg:ps-8 lg:pe-8 bg-white shadow-2xl mt-4 p-2 self-center xl:self-start text-black flex items-center justify-between font-semibold'>
        <h3 className='lg:text-[24px] xl:text-[18px]'>سجــل حضــورك الأن</h3>
        <FaArrowLeft className='lg:text-[24px] xl:text-[18px]' />
       </div>
    </div>
  )
}
