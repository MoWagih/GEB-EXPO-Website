import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationAR from "./locales/ar/translation.json";
import translationEN from "./locales/en/translation.json";

i18n
  .use(LanguageDetector) // يخلي الموقع يلتقط لغة المتصفح لو حابب
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: translationAR },
      en: { translation: translationEN },
    },
    lng: "ar",            // ✅ اللغة الافتراضية
    fallbackLng: "ar",    // لو مفيش ترجمة يرجع للعربي
    interpolation: { escapeValue: false },
  });

export default i18n;
