import React from "react";
import mockup1 from "../img/mockups/prana-work-1.png";
import mockup2 from "../img/mockups/prana-work-2.png";
import mockup3 from "../img/mockups/prana-work-3.png";

const Mockup = () => {
  return (
    // <div className="d-flex justify-content-center">
    //   <img src={mockup1} alt="" className="img-fluid w-100 mockup"/>
    //   <img src={mockup2} alt="" className="img-fluid w-100" />
    //   <img src={mockup3} alt="" className="img-fluid w-100"/>
    // </div>
    <div className="row">
      <div className="col-lg-12">
        <img src={mockup1} alt="" className="img-fluid w-33 mockup" />
        <img src={mockup2} alt="" className="img-fluid w-33" />
        <img src={mockup3} alt="" className="img-fluid w-33" />
      </div>
    </div>
  );
};

export default Mockup;
