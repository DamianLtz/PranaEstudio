import React, { useState, useEffect, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../context/langContext";
import Prana from "../img/icons/logo-prana.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [isActive, setActive] = useState<boolean>(false);

  const language = useContext(langContext);

  const changeLanguageNavbar = () => {
    if (language.lang === "en-US") {
      language.changeLanguage("es-AR");
    } else {
      language.changeLanguage("en-US");
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 100 && window.screen.width >= 576) {
      setNavbar(true);
    } else if (window.scrollY >= 80 && window.screen.width <= 576) {
      setNavbar(true);
    } else if (!isActive) {
      setNavbar(false);
    }
  };

  const handleToggle = () => {
    setActive(!isActive);
    if (!isActive) {
      setNavbar(true);
    } else if (isActive && window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      // Funciona solo con react-router.
    };
  });

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-2 ${
        navbar ? "bg-navbar-dark" : ""
      }`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={Prana}
            alt="Logo de Prana estudio"
            className="logo-navbar"
          />
        </a>
        <button
          className={`navbar-toggler border-0 shadow-none nav-icon-dark ${
            isActive ? "open" : ""
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <a className="nav-link navbar-link" href="/">
                <FormattedMessage
                  id="app-navbar-first-link"
                  defaultMessage="Inicio"
                />
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link navbar-link" href="#contacto">
                <FormattedMessage
                  id="app-navbar-second-link"
                  defaultMessage="Contacto"
                />
              </a>
            </li>
            <li className="nav-item px-3">
              <a href="#servicios" className="nav-link navbar-link">
                <FormattedMessage
                  id="app-navbar-third-link"
                  defaultMessage="Servicios"
                />
              </a>
            </li>
            <li className="nav-item px-3">
              <button
                className="nav-link navbar-link btn border-0 bg-transparent shadow-none"
                onClick={changeLanguageNavbar}>
                {language.lang === "es-AR" ? "EN" : "ES"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
