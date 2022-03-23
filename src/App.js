import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Paintings from "./components/Paintings/Paintings";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

const App = () => {
  return (
    <div className="main">
      <h1 className="name">Yehudit Englard</h1>
      <div className="router">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Paintings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
