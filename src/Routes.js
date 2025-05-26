import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Services from './pages/services';
import Contact from './pages/contact';
import Lazyload from './lazyload';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Lazyload" element={<Lazyload />} />
    </Routes>
  );
}

export default AppRoutes;
