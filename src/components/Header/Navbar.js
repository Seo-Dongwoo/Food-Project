import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "../../assets/css/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [blocknav, setBlocknav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setBlocknav(true);
    } else {
      setBlocknav(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className={blocknav ? "navbar blocknav" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Apple
            <i className="fa-brands fa-apple" />
          </Link>
          <div className="mobile-menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={click ? "nav-menu active" : "nav-menu"}
            onClick={closeMobileMenu}
          >
            <li className="nav-item">
              <Link to="/" className="nav-item-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-item-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-item-links">
                Products
              </Link>
            </li>
            <li>
              <Link to="/signup" className="nav-links-mobile">
                회원가입
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">회원가입</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;