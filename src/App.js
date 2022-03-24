import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Paintings from "./components/Paintings/Paintings";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { AnimatePresence } from "framer-motion";

const App = () => {

  return (
    <div className="main">
      <h1 className="name">Yehudit Englard</h1>
      <div className="router">
        <AnimatePresence>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Paintings />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
