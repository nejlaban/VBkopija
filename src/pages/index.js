import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import SEO from "../components/seo";
import CustomJumbotron from "../components/custom_jumbotron";
// import Layout from "../components/layout";
import Header from "../components/header";

const IndexPage = () => (
  <div>
    <Header />
    <SEO title="Home" />
    <CustomJumbotron />
  </div>
);

export default IndexPage;
