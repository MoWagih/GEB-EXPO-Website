import PrinceMohamedPhoto from '../assets/imgs/PrinceMohamed.png'
export default function PrinceMohamed() {
  return (
    <div className="bg-[#00000040] shadow-2xl w-full text-white flex flex-col-reverse pt-4 lg:p-10">
        {/* Titles and Img */}
        <div className='flex flex-col items-center justify-center p-3 gap-4'>
           {/* King Salman Titles */}
           <div className='flex flex-col items-center gap-1'>
                <h2 className='font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px]'>كلمة ولي العهد ورئيس مجلس الوزراء</h2>
                <h1 className='text-[13px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:hidden font-bold'>الأمير محمد بن سلمان بن عبد العزيز آل سعود</h1>
            </div>
           
           {/* Img and Words */}
            <div className='flex flex-col xl:flex-row xl:justify-center gap-2 lg:gap-5 xl:gap-0 xl:p-5 items-center justify-center xl:bg-[#3d815775] xl:shadow-2xl'>
                {/* King Salman Img */}
                <img className='border-1 border-[#ffffffb4] shadow-2xl sm:w-[40%] md:w-[35%] xl:w-[16%]' src={PrinceMohamedPhoto} alt="King Salman Bn Abd Al Aziz" />
      
                {/* Words */}
                <div className='flex flex-col gap-3'>
                  <p className='text-justify p-2 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[22px] xl:text-[30px] md:ps-20 md:pe-20 xl:ps-10 xl:pe-50'>ثروتنا الأولى التي لا تعادلها ثروة مهما بلغت شعب طموح، معظمه من الشباب، هو فخر بلادنا وضمان مستقبلها بعون الله</p>
                  <p className='hidden xl:flex xl:ps-10 font-bold'>الأمير محمد بن سلمان بن عبد العزيز آل سعود</p>
                </div>
            </div>
        </div>
    </div> 
  )
}
