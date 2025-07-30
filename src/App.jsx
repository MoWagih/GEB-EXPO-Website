import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./i18n";
import { useTranslation } from 'react-i18next';
import Home from './Pages/Home';
import AnimatedCursor from "react-animated-cursor";
import ProgramPage from './Pages/ProgramPage';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import RegisterPage from './Pages/RegisterPage';
import MediaPage from './Pages/MediaPage';



export default function App() {
 
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr"; // لضبط الاتجاه
  };

  useEffect(() => {
    document.body.dir = "rtl"; 
  }, []); 

  return (
    <div>
      {/* Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 122, 0" 
        outerAlpha={0.3}
        innerScale={1}
        outerScale={2}
      />
      
      {/* Static Nav-bar */}
      <Navbar />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Program' element={<ProgramPage />} />
          <Route path='/Services' element={<ServicesPage />} />
          <Route path='/Media' element={<MediaPage />} />
          <Route path='/Register' element={<RegisterPage />} />
          <Route path='/Contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  )
}
