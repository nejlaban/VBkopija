import React from "react";
import "./layout.css";

const Footer = () => (
    <div className="container" className="navigacija">
        <div className="row">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

        <div className="row">
            <div class="col" className="subscribe2">
                <p> Subscribe to see what's trending in your industry.</p>
            </div>
            <div class="col">
                <div class="row d-flex my-2 pr-2 pr-md-5 div1">
                    <div class="col-6 "> <input type="email" class="form-control py-3" id="inp1" placeholder="Your Email Address" /> </div>
                    <div class="col-4 px-0"> <button class="btn text-white px-4 py-2"> Submit </button> </div>
                </div>          
            </div>
        </div>
    </div >
);

export default Footer;