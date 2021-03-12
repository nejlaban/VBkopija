import React from "react";
import "./layout.css";

const CustomJumbotron = () => (
  <div className="container-fluid jumbotron">
    <div className="jumbo-text">
        <div>
          <h1 className="title">DEEP EXPERTISE IN <br></br>CAPITAL RAISING</h1>
          <span className="find">FIND OUT HOW</span>

          <h3 className="subheading">Global consulting firm with a speciality in Innovation,<br></br>
          Technology, Digital Transformation, Financing<br></br>
          and Revenue Growth.</h3>

          <button className="quoteButton">REQUEST A QUOTE</button>
        </div>
      </div>

      <div className="row lowerMenu">
        <p>Work With Us</p>
        <p>Economic Leaders </p>
        <p>Digital Transformation</p>
        <p>Big Trends</p>
        <p>Industries Of the Future </p>
      </div>
    </div>
);

export default CustomJumbotron;
