import React from "react";

const CustomJumbotron = () => (
  <div>
    <div
      class="jumbotron jumbotron-fluid"
      style={{
        position: "relative",
      }}
    >
      <div class="container"></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          paddingBottom: 0,
        }}
      >
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="#">
                Work With Us <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">
                Economic Leaders
              </a>
              <a class="nav-item nav-link" href="#">
                Digital Transformation
              </a>
              <a class="nav-item nav-link" href="#">
                Big Trends
              </a>
              <a class="nav-item nav-link" href="#">
                Industries Of the Future
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

export default CustomJumbotron;
