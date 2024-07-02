import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactForm from "./ContactForm";
import Curd from "./Curd";
import Navbar from "./Navbar";
import Profile from "./Profile";

function App() {
  const [src,setSrc]=useState("/images/WIN_20240701_18_31_16_Pro.jpg" )
  return (
    <>
      <Router>
        <Navbar src={src} />

        <Routes>
          <Route path="/" element={<Curd />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Profile" element={<Profile src={src} setSrc={setSrc}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
