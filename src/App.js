import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactForm from './ContactForm';
import Curd from './Curd';
import Navbar from './Navbar';
import Profile from './Profile';
import Bookstore from './Bookstore';
import './App.css'
import Spinner from './Spinner';


function App() {
  const [src, setSrc] = useState('/images/WIN_20240701_18_31_16_Pro.jpg');
  const [titles, setTitles] = useState([]);
  const [loader,setloader]=useState(false);


  return (
    <Router>
      <Navbar src={src} setTitles={setTitles} setloader={setloader} />
      {loader ? (
        <Spinner />
      ) : (
        titles.length > 0 ? (
          <Bookstore titles={titles} />
        ) : (
          <Routes>
            <Route path="/" element={<Curd />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="/Profile" element={<Profile src={src} setSrc={setSrc} />} />
          </Routes>
        )
      )}
    </Router>
  );
}

export default App;
