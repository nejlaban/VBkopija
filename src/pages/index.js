import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

// import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import CustomJumbotron from "../components/custom_jumbotron";
import CoreValues from '../components/core_values';
import CompanyOverview from '../components/company_overview';
import Comp from '../components/comp';
import Career from '../components/career';
import Subscribe from '../components/subscribe';
import Consultation from '../components/consultation';
import ClientsSay from '../components/clients_say';
import ReadyToTalk from '../components/ready_to_talk';
import SliderMenu from "../components/sliderMenu";


const IndexPage = () => (
  <div>
    <Header />
    <SEO title="Home" />
    <CustomJumbotron />
    <Comp/>
    <br />
    <br />
    <br />
    <div className="container">
      <p className="verticalLineLeft" 
          style={{textAlign: "center"}}>
        Across sectors, we indetify new markets, scale revenue, improve operations and provide financing support
      </p>
    </div>
    <br />
    <CoreValues />
    <br />
    <br />
    <br />
    <CompanyOverview />
    <br />
    <br />
    <SliderMenu/> 
    <br></br>
    <br></br>

    <ClientsSay />
    <br />
    <br />
    <br />
    <br />
    <br />
    <ReadyToTalk />
    <br />
    <br />
    <br />
    <Consultation/>
    <br></br>
    <br></br>
    <Subscribe />
    <Career />
    <br />
    <br />
  
  </div>
);

export default IndexPage;
