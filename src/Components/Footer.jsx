import { FaInstagram, FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Logo from '../../public/Logo.png';
import Carezma from '../assets/imgs/carezma logo.png';
import Riep from '../assets/imgs/Riep.png';

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="relative w-full mt-12" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} aria-label={t('footer.section_label')}>
      <div className="backdrop-blur-md bg-[#0f0f0fcc] border-t border-[#ffffff22] shadow-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <img src={Logo} alt={t('footer.logo_alt')} className="w-36 drop-shadow-lg" loading="lazy" />
            <p className="text-gray-300 text-sm leading-relaxed">{t('footer.description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">{t('footer.quick_links')}</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <a href="/" className="hover:text-green-300 transition" aria-label={t('footer.links.home')}>
                  {t('footer.links.home')}
                </a>
              </li>
              <li>
                <a href="/Program" className="hover:text-green-300 transition" aria-label={t('footer.links.program')}>
                  {t('footer.links.program')}
                </a>
              </li>
              <li>
                <a href="/Services" className="hover:text-green-300 transition" aria-label={t('footer.links.services')}>
                  {t('footer.links.services')}
                </a>
              </li>
              <li>
                <a href="/About" className="hover:text-green-300 transition" aria-label={t('footer.links.about')}>
                  {t('footer.links.about')}
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">{t('footer.information')}</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <a href="/Contact" className="hover:text-green-300 transition" aria-label={t('footer.links.contact')}>
                  {t('footer.links.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition" aria-label={t('footer.links.privacy')}>
                  {t('footer.links.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition" aria-label={t('footer.links.terms')}>
                  {t('footer.links.terms')}
                </a>
              </li>
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">{t('footer.organizers')}</h3>
            <div className="flex flex-col gap-4">
              <img
                src={Carezma}
                alt={t('footer.carezma_alt')}
                className="w-28 drop-shadow-lg transition transform hover:scale-105"
                loading="lazy"
              />
              <img
                src={Riep}
                alt={t('footer.riep_alt')}
                className="w-28 drop-shadow-lg transition transform hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col items-center justify-center gap-4 py-6 border-t border-[#ffffff1a]">
          <div className="flex gap-6 text-xl">
            {[
              { icon: <FaInstagram />, link: 'https://instagram.com', label: t('footer.social.instagram') },
              { icon: <FaLinkedin />, link: 'https://linkedin.com', label: t('footer.social.linkedin') },
              { icon: <FaTwitter />, link: 'https://twitter.com', label: t('footer.social.twitter') },
              { icon: <FaFacebookF />, link: 'https://facebook.com', label: t('footer.social.facebook') },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition transform hover:scale-110"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="text-gray-400 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}