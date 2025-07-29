import img1 from "../assets/imgs/وزارة التخطيط والاقتصاد.png";
import img2 from "../assets/imgs/وزارة الطاقة.png";
import img3 from "../assets/imgs/وزارة المالية.png";
import img4 from "../assets/imgs/Minisrty-of-Education-01-1-1.png";
import img5 from "../assets/imgs/Ministry-of-Culture.png";
import img6 from "../assets/imgs/Ministry-of-Interior.png";
import img7 from "../assets/imgs/Ministry_of_Communications_and_Information_Technology_.png";
import img8 from "../assets/imgs/Ministry-of-Environment-Water-and-Agriculture-01.png";
import img9 from "../assets/imgs/Ministry-of-Foreign-Affairs-01.png";



const logos = [img1, img2, img3 , img4 , img5, img6, img7, img8, img9];

export default function Partners() {
  return (
    <div className='bg-[#fcfcfcf5] shadow-2xl w-full flex flex-col justify-center items-center gap-4 lg:gap-8 p-3 pt-6 pb-6 lg:p-12 xl:p-10 text-white'>
         {/* Title of Section */}
         <div className="flex flex-col font-bold text-[32px] md:text-[36px] lg:text-[54px] xl:bg-[#5aa76aef] xl:ps-8 xl:pe-8 xl:p-4">
            <p className="text-[#08c757] xl:text-[white]">شركاء النجاح</p>
        </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
          >
            <img src={logo} alt={`Partner Logo ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
