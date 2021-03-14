import React from "react";
import "./layout.css";

import { Row, Col } from "react";
import bbcImg from "../images/bbcLogo.png"
import laImg from "../images/LAtimesLogo.png"
import cbsImg from "../images/cbs.png"
import nbcImg from "../images/nbc.png"
import foxImg from "../images/fox.png"

const SliderMenu = () => (
    <div className="container-fluid">
        <div className="row">
            <div class="vertical-menu">
                <a href="#" class="active">Business Consulting</a>
                <a href="#">Financing</a>
                <a href="#">Automation and Digital tranformation</a>
                <a href="#">Agile Development</a>
                <a href="#">Research & Data Analysis</a>
                <a href="#">Who we are</a>
                <a href="#">Talk to Us</a>
            </div>

            <div className="colVideo">
                <video width="400" height="300" controls>
                    
                </video>

                <p>
                    Our chief-level business consulting services come in an array of sub<br></br>branches like restructing and investment strategy. We are experts in <br></br>change management, technology and financing. Our customer focused <br></br>
                    analysis has proven to drive revenue growth.
                </p>
            </div>
        </div>
    </div>

);

export default SliderMenu;
