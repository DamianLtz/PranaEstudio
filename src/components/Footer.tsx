import React from "react";

import LogoFooter from "../img/icons/logoPranaFooter.svg";
import Whatsapp from "../img/icons/whatsapp-logo.svg";
import Instagram from "../img/icons/instagram-logo.svg";
import Behance from "../img/icons/behanceLogo.svg";
import Mail from "../img/icons/mail.svg";
import Location from "../img/icons/map.svg";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className="container-fluid container-footer py-5 py-lg-0" id="contacto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 offset-lg-1 pb-3">
            <p className="idea">
              <FormattedMessage
                id="app-footer-1"
                defaultMessage="Contanos tu idea"
              />
            </p>
            <p className="fw-light idea-2">
              <FormattedMessage
                id="app-footer-2"
                defaultMessage="La hacemos realidad"
              />
            </p>
            <img
              src={LogoFooter}
              alt=""
              className="img-fluid logo-footer mt-3"
            />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <a
              href="https://wa.me/541165693554"
              className="d-flex align-items-center container-social"
              target="_blank"
              rel="noreferrer">
              <img
                src={Whatsapp}
                alt="Número de Whatsapp"
                className="icon-social"
              />
              <p className="ms-4">+54 911 6569 3554 </p>
            </a>
            <a
              className="d-flex align-items-center container-social"
              href="https://www.instagram.com/prana.estudio/"
              target="_blank"
              rel="noreferrer">
              <img
                src={Instagram}
                alt="Instagram de Prana"
                className="icon-social"
              />
              <p className="ms-4">prana.estudio</p>
            </a>
            <a
              href="https://www.behance.net/pranaestudio"
              className="d-flex align-items-center container-social"
              target="_blank"
              rel="noreferrer">
              <img
                src={Behance}
                alt="Behance de Prana"
                className="icon-social"
              />
              <p className="ms-4">info@pranaestudio.com.ar</p>
            </a>
            <div className="d-flex align-items-center container-social">
              <img
                src={Mail}
                alt="Correo electronico de Prana"
                className="icon-social"
              />
              <p className="ms-4">info@pranaestudio.com.ar</p>
            </div>
            <div className="d-flex align-items-center container-social">
              <img
                src={Location}
                alt="Dirección de Prana"
                className="icon-social"
              />
              <p className="ms-4">Nuñez 6149 - CABA - Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
