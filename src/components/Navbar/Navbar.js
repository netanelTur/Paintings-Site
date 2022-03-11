import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
  <div className="navbar">
    <li>
      <Link to="/" className={url === "/" ?" active" : ""}>My paintings</Link>
    </li>
    <li>
      <Link to="/contact" className={url === "/contact" ?" active" : ""}>Contact me</Link>
    </li>
    <li>
      <Link to="/about" className={url === "/about" ?" active" : ""}>About me</Link>
    </li>
  </div>
  );
}
export default Navbar;