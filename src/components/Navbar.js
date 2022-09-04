import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [isActive, setActive] = useState("false");

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  const toggleMobileMenu = () => {
    setActive(!isActive);

    document.body.style.overflowY = isActive ? "hidden" : "initial";
  }

  return (
  <>
    <ul className="navbar1">
        <li>
          <Link to="/" className={url === "/" ?" active" : ""}>My paintings</Link>
        </li>
        <li>
          <Link to="/contact" className={url === "/contact" ?" active" : ""}>Contact me</Link>
        </li>
        <li>
          <Link to="/about" className={url === "/about" ?" active" : ""}>About me</Link>
        </li>
    </ul>
    <div className={!isActive ? "hamburger-icon open" : "hamburger-icon"} onClick={toggleMobileMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>

      <ul className="mobile-menu">
        <li>
          <Link to="/" className={url === "/" ?" active" : ""}>My paintings</Link>
        </li>
        <li>
          <Link to="/contact" className={url === "/contact" ?" active" : ""}>Contact me</Link>
        </li>
        <li>
          <Link to="/about" className={url === "/about" ?" active" : ""}>About me</Link>
        </li>
      </ul>
    </div>
  </>
  );
}
export default Navbar;