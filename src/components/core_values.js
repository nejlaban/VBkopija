import React from "react";

import CoreValuesCard from "./core_values_card";

import "./layout.css";

import { useStaticQuery, graphql } from "gatsby";

const CoreValues = () => {
  const data = useStaticQuery(graphql`
    query CoreValuesQuery {
      allCoreValuesDataJson {
        edges {
          node {
            number
            text
            title
          }
        }
      }
    }
  `);

  function getCoreValues(data) {
    const coreValuesArray = [];
    data.allCoreValuesDataJson.edges.forEach((item, index) => {
      coreValuesArray.push(
        <div className="col">
          <CoreValuesCard
            cardTitle={item.node.title}
            cardNumber={item.node.number}
            cardText={item.node.text}
          />
          <br />
        </div>
      );
    });
    return coreValuesArray;
  }
  return (
    <div className="container">
      <p className="valuesAndOverview">
        OUR <span className="blueText">CORE VALUES</span>
      </p>
      <br />
      <br />
      <div className="row">
        {getCoreValues(data)}
      </div>
    </div>
  );
};

export default CoreValues;
