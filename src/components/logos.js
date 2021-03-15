import React from "react";
import "./layout.css";

import ImgLogos from "../images/logoRow.png";

const Logos = () => (
    <div className="container">
        <div className="">
            <img src={ImgLogos} className="logosRow" alt='' />
        </div>
    </div >
);

export default Logos;