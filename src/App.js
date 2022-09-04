import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paintings from "./components/Paintings";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import { AnimatePresence } from "framer-motion";

const App = () => {

  useEffect(() => {
    document.title = "Yehudit Englard";
  }, []);

  return (
    <div className="main">
      <h1 className="name-logo">Yehudit Englard</h1>
      <div className="router">
        <AnimatePresence>
          <Router>
            <Navbar />
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<Paintings />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } />
              </Routes>
            </AuthProvider>
          </Router>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
