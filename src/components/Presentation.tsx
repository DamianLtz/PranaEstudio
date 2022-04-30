import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import DecoL from "../img/animations/circulo.svg";
import ArrowDown from "../img/icons/ArrowDown.svg";
import scrollTo from "./ScrollTo";
import Button from "./Button";

const Presentation = () => {
  const [backColor, setBackColor] = useState<string>("");
  return (
    <>
      <div className={`background-presentation position-relative ${backColor}`}>
        <div className="container">
          <div className="container-presentation">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="text-presentation">
                  <FormattedMessage
                    id="app-presentation-1"
                    defaultMessage="Desde la primera"
                  />
                  <span
                    style={{
                      color:
                        backColor === "bg-hover-color" ? "#ffffff" : "#74e2c0",
                    }}>
                    {" "}
                    <FormattedMessage
                      id="app-presentation-2"
                      defaultMessage="bocanada"
                    />
                  </span>
                  ,
                  <br />
                  <FormattedMessage
                    id="app-presentation-3"
                    defaultMessage="construimos y creamos."
                  />
                  <span
                    style={{
                      color:
                        backColor === "bg-hover-color" ? "#ffffff" : "#74e2c0",
                    }}>
                    .
                  </span>
                </h1>
                <div>
                  <Button
                    text="Mirá nuestros trabajos"
                    link="https://www.behance.net/pranaestudio"
                  />
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-center arrow-container"
              id="servicios">
              <img
                src={ArrowDown}
                alt="Ver Servicios"
                className="arrowDown cursor-pointer"
                onClick={scrollTo}
              />
            </div>
          </div>
          {/* Servicios de Prana */}
          <div className="col-lg-12 col-spacing">
            <p className="text-center title-services">
              <FormattedMessage
                id="app-services-1"
                defaultMessage="Todo esto podemos hacer por vos"
              />
            </p>
            <ul className="row align-items-center list-services">
              <li className="col-lg-4 col-md-6 col-sm-6 gy-4 gy-lg-0">
                <div>
                  <p
                    className="text-center cursor-default text-service"
                    onMouseEnter={() => setBackColor("bg-hover-color")}
                    onMouseLeave={() => setBackColor("")}>
                    <FormattedMessage
                      id="app-services-2"
                      defaultMessage="Diseño y Branding"
                    />
                    <span className="effect"></span>
                  </p>
                  <p className="text-service-2 text-center">
                    <FormattedMessage
                      id="app-services-3"
                      defaultMessage="Marca y comunicación"
                    />
                  </p>
                </div>
              </li>
              <li className="col-lg-2 col-md-6 col-sm-6 gy-4 gy-lg-0">
                <div>
                  <p
                    onMouseEnter={() => setBackColor("bg-hover-color")}
                    onMouseLeave={() => setBackColor("")}
                    className="cursor-default text-service text-center">
                    <FormattedMessage
                      id="app-services-4"
                      defaultMessage="Digital"
                    />
                    <span className="effect"></span>
                  </p>
                  <p className="text-service-2 text-center">
                    <FormattedMessage
                      id="app-services-5"
                      defaultMessage="Web · Apps  · UX/UI"
                    />
                  </p>
                </div>
              </li>
              <li className="col-lg-3 col-md-6 col-sm-6 gy-4 gy-lg-0">
                <div>
                  <p
                    className="text-center cursor-default text-service"
                    onMouseEnter={() => setBackColor("bg-hover-color")}
                    onMouseLeave={() => setBackColor("")}>
                    <FormattedMessage
                      id="app-services-6"
                      defaultMessage="Producción"
                    />
                    <span className="effect"></span>
                  </p>
                  <p className="text-service-2 text-center">
                    <FormattedMessage
                      id="app-services-7"
                      defaultMessage="Eventos y escenografías"
                    />
                  </p>
                </div>
              </li>
              <li className="col-lg-3 col-md-6 col-sm-6 gy-4 gy-lg-0">
                <div>
                  <p
                    onMouseEnter={() => setBackColor("bg-hover-color")}
                    onMouseLeave={() => setBackColor("")}
                    className="cursor-default text-service text-center">
                    <FormattedMessage
                      id="app-services-8"
                      defaultMessage="Marketing"
                    />
                    <span className="effect"></span>
                  </p>
                  <p className="text-service-2 text-center">
                    <FormattedMessage
                      id="app-services-9"
                      defaultMessage="Social media"
                    />
                  </p>
                </div>
              </li>
            </ul>
            <div className="d-flex justify-content-center py-5">
              <Button
                text="Mirá nuestros trabajos"
                link="https://www.behance.net/pranaestudio"
              />
            </div>
          </div>
        </div>
        <div
          className={`deco-right-side ${
            backColor === "bg-hover-color" ? "deco-right-side-hover" : ""
          }`}></div>
        <div className="deco-left-side">
          <img src={DecoL} alt="" className="circle" />
        </div>
      </div>
    </>
  );
};

export default Presentation;
