import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import MediaCover from "../assets/imgs/equipment-empty-musical-recording-room.jpg";
import img1 from "../assets/imgs/Saudi-News-01.png";
import img2 from "../assets/imgs/شعار_قناة_السعودية.png";
import img3 from "../assets/imgs/Saudi-Brodcasting-Corporation.png";
import img4 from "../assets/imgs/MBC.png";
import img5 from "../assets/imgs/روتانا.jpg";
import img6 from "../assets/imgs/Saudi_Research_and_Media_Group_New_Logo.png";
import img7 from "../assets/imgs/Sabq-01-01.png";
import img8 from "../assets/imgs/صحيفة_مال.jpg";
import img9 from "../assets/imgs/Okaz-01.png";
import img10 from "../assets/imgs/Ml_tv.jpeg";
import img11 from "../assets/imgs/Eye-of-Riyadh-01.png";
import img12 from "../assets/imgs/مزاج_اف_ام.jpg";
import img13 from "../assets/imgs/جريدة_المدينة.png";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const mediaPartners = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12, img13,
];

export default function MediaPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-16 lg:gap-20">

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[80vh] pt-[80px] lg:pt-[100px]">
        <img
          src={MediaCover}
          alt="Media Coverage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000c7] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            الإعلام في GEB Expo
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 max-w-2xl leading-relaxed">
            تغطية إعلامية موسعة من القنوات والصحف الكبرى لضمان وصول رسائل المعرض لأكبر جمهور ممكن.
          </p>
        </div>
      </div>

      <motion.section
        className="max-w-4xl text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-500 mb-6">
          أخبار وبيانات صحفية
        </h2>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
          من خلال GEB Expo 2025 سيتم الإعلان عن أحدث المبادرات التعليمية والشراكات. تابع آخر الأخبار هنا أو من خلال وسائل الإعلام الرسمية.
        </p>
      </motion.section>

      <motion.section
        className="w-full py-12 px-6 text-center bg-[#fffffffa]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-400 mb-8">
          القنوات الشريكة في التغطية الإعلامية
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {mediaPartners.map((logo, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center hover:scale-105 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={logo}
                alt={`Media Logo ${i}`}
                className="h-16 sm:h-20 lg:h-24 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="max-w-5xl text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-500 mb-6">
          أبرز التغطيات
        </h2>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
          سيتم مشاركة روابط التقارير التلفزيونية والمقالات والصور من مختلف وسائل الإعلام هنا بعد بداية المعرض.
        </p>
      </motion.section>

      <motion.section
        className="max-w-4xl text-center px-4 pb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-400 mb-4">
          للتواصل الإعلامي
        </h2>
        <p className="text-gray-200 mb-4">
          لأي استفسارات أو لتنسيق التغطية الإعلامية، يرجى التواصل على:
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-lg flex items-center justify-center gap-3 font-semibold xl:text-[22px] text-green-400">
             info@geb-expo.com <HiOutlineMail /> </p>
          <p className="text-lg flex items-center justify-center gap-3 font-semibold xl:text-[22px] text-green-400">
             966575056525+
    <HiOutlinePhone /> </p>
          <p className="text-lg flex items-center justify-center gap-3 font-semibold xl:text-[22px] text-green-400">
             601160501948+
    <HiOutlinePhone /> </p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
