import React from "react";

const CompanyOverview = () => (
  <div className="container">
    <p className="valuesAndOverview">
      OUR COMPANY <span className="blueText">OVERVIEW</span>
    </p>
    <p>
      Venture Plans is a sophisticated team of diverse industry-specific
      consultants with deep focus in finance, legal advisory and digital
      innovation. Our executive-level consultants are ivy league trained with
      institutional-caliber capabilities. We enable the best possible outcomes
      through value-based methodologies that succinctly capture the maximum
      value of your principals, intellectual property, business performance,
      markets and outlook.
    </p>
    <div className="container blurredTextDiv">
      <p className="blurredText widthAndHeight100">
        Venture Plans supports high-tech "something" with an emphasis on growth,
        marketing and go-to-market "something" Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="container readMoreButtonDiv">
        <button className="readMoreButton">read more ▾</button>
      </div>
    </div>
  </div>
);

export default CompanyOverview;
