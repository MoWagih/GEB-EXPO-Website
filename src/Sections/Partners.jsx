import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/imgs/وزارة التخطيط والاقتصاد.png";
import img2 from "../assets/imgs/وزارة الطاقة.png";
import img3 from "../assets/imgs/وزارة المالية.png";
import img4 from "../assets/imgs/Ministry_of_Communications_and_Information_Technology_.png";
import img5 from "../assets/imgs/Ministry-of-Interior.png";
import img6 from "../assets/imgs/Minisrty-of-Education-01-1-1.png";
import img7 from "../assets/imgs/Ministry-of-Foreign-Affairs-01.png";
import img8 from "../assets/imgs/Ministry-of-Environment-Water-and-Agriculture-01.png";
import img9 from "../assets/imgs/Ministry of Municipalities & Housing.png";
import img10 from "../assets/imgs/Ministry-of-Culture.png";
import img11 from "../assets/imgs/Aramco-01.png";
import img12 from "../assets/imgs/Capital-Market-Authority-01.png";
import img13 from "../assets/imgs/SDAIA-1.png";
import img14 from "../assets/imgs/EasternEamana.png";
import img15 from "../assets/imgs/الملكية الفكرية.png";
import img16 from "../assets/imgs/Ministry of Tourism.png";
import img17 from "../assets/imgs/أمانة-الرياض-1536x414.png";
import img18 from "../assets/imgs/القوات الخاصة للامن البيئي.jpg";
import img19 from "../assets/imgs/monshaat-01.png";
import img20 from "../assets/imgs/الهيئة_الملكية_لمكة_المكرمة_والمشاعر_المقدسة.jpg";
import img21 from "../assets/imgs/king abdulaziz royal reserve development authority.png";
import img22 from "../assets/imgs/General Entertainment Authority-01.png";
import img23 from "../assets/imgs/محمية الامير محمد بن سلمان.png";
import img24 from "../assets/imgs/محمية الملك سلمان.png";
import img25 from "../assets/imgs/STC-01.svg.png";
import img26 from "../assets/imgs/Geely_logo.svg.png";
import img27 from "../assets/imgs/global-experience-specialists-1200px-logo.png";
import img28 from "../assets/imgs/RC-Logo-.png";
import img29 from "../assets/imgs/dmg-events.jpeg";
import img30 from "../assets/imgs/الراجحي.png";
import img31 from "../assets/imgs/Society_Saudi-Arabia_RGB.png";
import img32 from "../assets/imgs/تحالف.jpg";
import img33 from "../assets/imgs/صندوق التنية السياحي.jpg";
import img34 from "../assets/imgs/مقصفي.png";
import img35 from "../assets/imgs/informa_cityscape_master_logo_rgb.png";
import img36 from "../assets/imgs/kidana-logo-gold-06.png";
import img37 from "../assets/imgs/informa-logo.png";
import img38 from "../assets/imgs/JAPAN-HEALTH-COLOUR-1.png";
import img39 from "../assets/imgs/blackhat.png";
import img40 from "../assets/imgs/الاتحاد السعودي للامن السيبراني.png";

const logos = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40
];

export default function PartnersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const chunkSize = 4;
  const slides = [];
  for (let i = 0; i < logos.length; i += chunkSize) {
    slides.push(logos.slice(i, i + chunkSize));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 bg-[#ffffff]">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-center text-green-500">
        شركاء النجاح
        <span className="block w-20 h-[3px] bg-green-400 mt-4 mx-auto"></span>
      </h2>

      <div className="relative flex justify-center items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center w-full max-w-6xl"
          >
            {slides[currentSlide].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[140px] sm:w-[200px] lg:w-[300px] h-[120px] sm:h-[160px] lg:h-[200px]"
              >
                <img
                  src={logo}
                  alt={`Partner Logo ${i}`}
                  className="w-[80%]"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
