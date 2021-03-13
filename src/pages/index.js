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
  </div>
);

export default IndexPage;
