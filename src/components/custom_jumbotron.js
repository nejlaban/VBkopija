import React from "react";
import "./layout.css";

<i class="bi bi-arrow-right"></i> //arrow near FIND OUT MORE

const CustomJumbotron = () => (
  <div className="container-fluid jumbotron jumbotron-fluid">
    <div className="jumbo-text">
      <div>
        <h1 className="title">DEEP EXPERTISE IN <br></br>CAPITAL RAISING</h1>
        <span className="find">FIND OUT HOW <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" color="#00a1f1">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg></span>

        <h3 className="subheading">Global consulting firm with a speciality in Innovation,<br></br>
          Technology, Digital Transformation, Financing<br></br>
          and Revenue Growth.</h3>

        <button className="quoteButton">REQUEST A QUOTE</button>
      </div>
    </div>

    <div className="row lowerMenu">
      <p class="workWithUs">Work With Us</p>
      <p>Economic Leaders </p>
      <p>Digital Transformation</p>
      <p>Big Trends</p>
      <p>Industries Of the Future </p>
    </div>
  </div>
);

export default CustomJumbotron;
