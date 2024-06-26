import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactForm from "./ContactForm";
import Curd from "./Curd";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Curd />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
