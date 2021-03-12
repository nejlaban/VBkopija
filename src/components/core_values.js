import React from "react";

import "./core_values_card";
import CoreValuesCard from "./core_values_card";

import "./layout.css";

const CoreValues = () => (
  <div className="container">
    <p className="valuesAndOverview">OUR <span className='blueText'>CORE VALUES</span></p>
    <br />
    <br />
    <div className="row">
      <div className="col">
        <CoreValuesCard cardTitle='Passion & Dilligence'
                        cardNumber='1'
                        cardText='Passion is a main driver to change your idea into a profitable venture.
                                    Our diligence is reflected in our careful and persistent work ethic.' />
      </div>
      <div className="col">
        <CoreValuesCard cardTitle='Honesty & Flexibility'
                        cardNumber='2'
                        cardText='We uphold integrity, honesty and trust in our work. 
                                    We are accountable and consistent in driving results.'/>
      </div>
      <div className="col">
        <CoreValuesCard cardTitle='Practical'
                        cardNumber='3'
                        cardText='Propriety standard operating procedures that are tested and proven
                                    for maximizing operational efficiencies.'/>
      </div>
      <div className="col">
        <CoreValuesCard cardTitle='One Team'
                        cardNumber='4'
                        cardText='Our accredited advisors work together to align with your vision
                                    and boost your growth.'/>
      </div>
    </div>
  </div>
);

export default CoreValues;
