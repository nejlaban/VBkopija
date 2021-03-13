import React from "react";

import ClientCard from "./clients_card";

const ClientsSay = () => (
  <div className="container-fluid">
    <div className="container">
      <p className="valuesAndOverview">
        WHAT OUR CLIENTS SAY <span className="blueText">ABOUT US</span>
      </p>
    </div>
    <br />
    <br />
    <br />
    <div className="row width100MarginLeft50">
      <div className="col">
        <ClientCard
          cardText="It is clear that Mr. Dordar and Venture Plans has very large accomplishments in the horizon."
          clientName="Frank G."
        />
        <br />
      </div>
      <div className="col">
        <ClientCard
          cardText="I'm a shareholder and a serial entrepreneur of multi-million dollar firms since the early
                        1990's. Our target for corporate planning, restructuring, financial advisory and deal 
                        structuring is Arleo Dordar and Venture Plans. Arleo Dordar helped draft an excellet..."
          clientName="Jack K."
        />
        <br />
      </div>
      <div className="col">
        <ClientCard
          cardText="We featured Arleo Dordar on the Beverly Hills House Wives on Bravo to provide direction on
                        our deal structure. Venture Plans helped..."
          clientName="Jane D."
        />
        <br />
      </div>
      <div className="col">
        <ClientCard
          cardText="Grant applications in the U.S. are highly competitive. Covid has reduced our revenue by 50%.
                        Qualified grant -specific consultants are important for effective grant approvals. We 
                        resulted in a 3.5M raise with the..."
          clientName="Andre J."
        />
        <br />
      </div>
    </div>
    <br />
    <br />
    <div className='container-fluid'>
      <button className="consultationButton"><b>BOOK A FREE CONSULTATION</b></button>
    </div>
  </div>
);

export default ClientsSay;
