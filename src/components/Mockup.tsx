import React from "react";
import mockup1 from "../img/mockups/prana-work-1.png";
import mockup2 from "../img/mockups/prana-work-2.png";
import mockup3 from "../img/mockups/prana-work-3.png";

const Mockup = () => {
  return (
    <div className="row g-0">
      <div className="col-lg-4">
        <img
          src={mockup1}
          alt="Primer imagen de trabajos realizados por prana"
          className="img-fluid"
        />
      </div>
      <div className="col-lg-4">
        <img
          src={mockup2}
          alt="Segunda imagen de trabajos realizados por prana"
          className="img-fluid"
        />
      </div>
      <div className="col-lg-4">
        <img
          src={mockup3}
          alt="Tercer imagen de trabajos realizados por prana"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Mockup;
