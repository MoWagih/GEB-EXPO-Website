import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import ProgramPage from './Pages/ProgramPage';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import RegisterPage from './Pages/RegisterPage';
import MediaPage from './Pages/MediaPage';

export default function App() {
 

  useEffect(() => {
    document.body.dir = "rtl"; 
  }, []); 

  return (
    <div>    
      {/* Static Nav-bar */}
      <Navbar />
      <Routes>
      <Route index element={<Home />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Program" element={<ProgramPage />} />
      <Route path="/Services" element={<ServicesPage />} />
      <Route path="/Media" element={<MediaPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Contact" element={<ContactPage />} />
    </Routes>
    </div>
  )
}
