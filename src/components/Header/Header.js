import React, { useState, useEffect } from "react";
import logo from "../../logo2.svg";

function Header() {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 70) {
      return setHeader("header");
      console.log("scrollTop" + window.scrollY);
    } else if (window.scrollY > 70) {
      console.log("scrollY header2" + window.scrollY);
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
        <div className="header-wrapper">
        <header className={header}>
            <div className="logo">
              <img src={logo} />
            </div>
            <ul className="links">
              <li className="link-item">home</li>
              <li className="link-item">about</li>
              <li className="link-item">blog</li>
              <li className="link-item">contact</li>
            </ul>
        </header>
        </div>
      
    </>
  );
}

export default Header;
