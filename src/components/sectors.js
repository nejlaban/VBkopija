import React from "react";

import "./layout.css";

import ImgB from "../images/circleB.png";
import ImgA from "../images/circleA.png";
import ImgC from "../images/circleC.png";

const Sectors = () => (
  <div className="container-fluid">
    <div className="container">
      <p className="valuesAndOverview">SECTORS WE EXCELLED IN</p>
      <div className="container subheading2">
        Client expertise in 150+ industries, find out how we can help you adapt
        to a changing economy
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
    <div className="row">
      <div className="col-sm sectorsImageMain"></div>
      <div className="col-sm" style={{display:'flex'}}>
        <div className="row">
          <div className="col">
            <div
              className="row"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <span className="sectorsNumber">8</span>
              <p className="sectorsParagraph">Industry Consultants</p>
            </div>
            <img src={ImgB} className="sectorsImage" />
          </div>
          <div className="col">
            <div
              className="row"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <span className="sectorsNumber">10</span>
              <p className="sectorsParagraph">Years of Experience</p>
            </div>
            <img src={ImgC} className="sectorsImage" />
          </div>
          <div className="w-100"></div>
          <div className="col">
            <div
              className="row"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <span className="sectorsNumber">386</span>
              <p className="sectorsParagraph">Business Plans Written</p>
            </div>
            <img src={ImgA} className="sectorsImage" />
          </div>
          <div className="col">
            <div
              className="row"
              style={{ justifyContent: "center", display: "flex" }}
            >
              <span className="sectorsNumber">35 MM</span>
              <p className="sectorsParagraph">Raised</p>
            </div>
            <img src={ImgC} className="sectorsImage" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className='container-fluid'>
      <button className="consultationButton"><b>BOOK A FREE CONSULTATION</b></button>
    </div>
  </div>
);

export default Sectors;
