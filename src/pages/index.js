import * as React from "react";

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
import Sectors from "../components/sectors";
import Insights from "../components/insights";
import Footer from "../components/footer";
import Logos from "../components/logos";



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
    <br />
    <br />
    <br />
    <br />
    <Sectors />
    <br />
    <br />
    <br />
    <br />
    {/* <Insights /> */}
    <Subscribe />
    <Career />
    <br></br>
    <br></br>
    <Logos/>
    <br />
    <br />
    <Footer/> 
  </div>
);

export default IndexPage;
