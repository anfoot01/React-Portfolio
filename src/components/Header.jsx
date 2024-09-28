import React from "react";
import "../styles/main.scss";
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Portfolio</div>
        <div className="header__nav">
          <div
            className="header__backdrop"
            id="headerBackdrop"
            onclick="navToggle()"
          ></div>
          <ul className="header__ul" id="headerUl">
            <li className="header__li">
              <a className="header__a" href="#about">
                About
              </a>
            </li>
            <li className="header__li">
              <a className="header__a" href="#education">
                Education
              </a>
            </li>
            <li className="header__li">
              <a className="header__a" href="#skills">
                Skills
              </a>
            </li>
            <li className="header__li">
              <a className="header__a" href="#works">
                Works
              </a>
            </li>
            <li className="header__li">
              <a className="header__a" href="#blog">
                Contact
              </a>
            </li>
            <span className="material-icons icon-close" onclick="navToggle()">
              close
            </span>
          </ul>
          <span className="material-icons icon-menu" onclick="navToggle()">
            menu
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
