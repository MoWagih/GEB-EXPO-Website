import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./i18n";
import { useTranslation } from 'react-i18next';
import Home from './Pages/Home';
import AnimatedCursor from "react-animated-cursor";



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
        color="255, 122, 0"     // لون (RGB)
        outerAlpha={0.3}
        innerScale={1}
        outerScale={2}
      />
      
      {/* Static Nav-bar */}
      <Navbar />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<h1>عن المعرض</h1>} />
          <Route path='/Program' element={<h1>برنامج المعرض</h1>} />
          <Route path='/Exhibitors' element={<h1>العارضون</h1>} />
          <Route path='/Media' element={<h1>الإعلام</h1>} />
          <Route path='/Register' element={<h1>التسجيل</h1>} />
          <Route path='/Contact' element={<h1>التواصل</h1>} />
        </Route>
      </Routes>
    </div>
  )
}
