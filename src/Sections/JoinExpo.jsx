import { FaArrowLeft } from "react-icons/fa";

export default function JoinExpo() {
  return (
    <div className="w-full h-[70vh] flex flex-col xl:flex-row gap-4 xl:gap-6 xl:ps-10 xl:pe-10 bg-[#000000a4] shadow-2xl justify-center items-center text-white">
         {/* Title of Section */}
         <div className="flex flex-col font-semibold text-[32px] md:text-[36px] lg:text-[54px] xl:ps-8 xl:pe-8 xl:p-4 xl:shadow-2xl">
            <p>كـــن جـــزءًا مــن</p>
            <p className="text-[#08c757]">GEB Expo 2025</p>
        </div>


     {/* CTA AND Words */}
     <div className="flex flex-col xl:w-[50%] gap-0.5 sm:gap-1.5 justify-center items-center p-1 sm:ps-12 sm:pe-12 md:ps-22 md:pe-22 xl:p-0 text-center xl:text-right">
          {/* Words */}
          <p className="text-[14px] sm:text-[15px] lg:text-[22px] xl:text-[22px]">معرض GEB ليس مجرد حدث، بل هو تعاون عالمي لبناء جيل واع وماهر، مستعد لقيادة تحولات الغد</p>

          {/* CTA */}
          <div className='w-[80%] sm:w-[75%] md:w-[60%] xl:w-[100%] xl:p-2 xl:ps-6 xl:pe-6 sm:ps-3 sm:pe-3 md:ps-6 md:pe-6 lg:ps-8 lg:pe-8 bg-white shadow-2xl mt-4 p-2 self-center text-black flex items-center justify-between font-semibold'>
          <h3 className='lg:text-[24px] xl:text-[18px]'>انضم إلينا</h3>
          <FaArrowLeft className='lg:text-[24px] xl:text-[18px]' />
        </div>
     
     </div>


    </div>
  )
}
