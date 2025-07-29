import { motion } from "framer-motion";
import img1 from "../assets/imgs/وزارة التخطيط والاقتصاد.png";
import img2 from "../assets/imgs/وزارة الطاقة.png";
import img3 from "../assets/imgs/وزارة المالية.png";
import img4 from "../assets/imgs/Minisrty-of-Education-01-1-1.png";
import img5 from "../assets/imgs/Ministry-of-Culture.png";
import img6 from "../assets/imgs/Ministry-of-Interior.png";
import img7 from "../assets/imgs/Ministry_of_Communications_and_Information_Technology_.png";
import img8 from "../assets/imgs/Ministry-of-Environment-Water-and-Agriculture-01.png";
import img9 from "../assets/imgs/Ministry-of-Foreign-Affairs-01.png";

const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Partners() {
  return (
    <section className="relative w-full py-16 px-6 flex flex-col items-center text-center">
      
      {/* ✅ خلفية Gradient زي Cairo ICT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002d2d] via-[#014c39] to-[#0c6e4e] opacity-95 -z-10"></div>

      {/* ✅ العنوان */}
      <motion.h2 
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        شركاء النجاح
        <span className="block w-20 h-[3px] bg-green-400 mt-4 mx-auto"></span>
      </motion.h2>

      {/* ✅ Grid للشعارات مع أنيميشن */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-center bg-white p-6 shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt={`Partner Logo ${i}`} className="h-34 object-contain" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
