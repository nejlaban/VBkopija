import React from "react";
import "./layout.css";

import ImgLogos from "../images/logoRow.png";

const Logos = () => (
  <div className="container-fluid">
    <img src={ImgLogos} className="logosRow" alt="" />
  </div>
);

export default Logos;
