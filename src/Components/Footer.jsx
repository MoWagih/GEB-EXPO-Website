import { FaInstagram, FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";
import Logo from "../../public/Logo.png";
import Carezma from "../assets/imgs/carezma logo.png";
import Riep from "../assets/imgs/RIEP.png";

export default function Footer() {
  return (
    <footer className="relative w-full mt-12">
      <div className="backdrop-blur-md bg-[#0f0f0fcc] border-t border-[#ffffff22] shadow-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12">
          <div className="flex flex-col gap-4">
            <img src={Logo} alt="GEB Expo Logo" className="w-36 drop-shadow-lg" />
            <p className="text-gray-300 text-sm leading-relaxed">
              GEB Expo 2025 – أكبر معرض تعليمي يجمع الجامعات، المدارس، والخبراء من مختلف أنحاء العالم في حدث واحد مليء بالفرص والإلهام.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">روابط سريعة</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li><a href="/" className="hover:text-green-300 transition">الصفحة الرئيسية</a></li>
              <li><a href="/Program" className="hover:text-green-300 transition">البرنامج</a></li>
              <li><a href="/Services" className="hover:text-green-300 transition">الخدمات</a></li>
              <li><a href="/About" className="hover:text-green-300 transition">عن المعرض</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">معلومات</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li><a href="/Contact" className="hover:text-green-300 transition">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-green-300 transition">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-green-300 transition">الشروط والأحكام</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">منظمين المعرض</h3>
            <div className="flex flex-col gap-4">
              <img
                src={Carezma}
                alt="Carezma Logo"
                className="w-28 drop-shadow-lg transition transform hover:scale-105"
              />
              <img
                src={Riep}
                alt="Riep Logo"
                className="w-28 drop-shadow-lg transition transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 py-6 border-t border-[#ffffff1a]">
          <div className="flex gap-6 text-xl">
            {[
              { icon: <FaInstagram />, link: "https://instagram.com" },
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
              { icon: <FaFacebookF />, link: "https://facebook.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition transform hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="text-gray-400 text-sm">
            <p>© جميع الحقوق محفوظة لمعرض GEB Expo 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}