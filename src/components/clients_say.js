import React from "react";

import ClientCard from "./clients_card";

import { useStaticQuery, graphql } from "gatsby";

const ClientsSay = () => {
  const data = useStaticQuery(graphql`
    query ClientsQuery {
      allClientDataJson {
        edges {
          node {
            name
            stars
            text
          }
        }
      }
    }
  `);

  function getClients(data) {
    const clientsArray = [];
    data.allClientDataJson.edges.forEach((item, index) => {
      clientsArray.push(
        <div className="col">
          <ClientCard cardText={item.node.text} clientName={item.node.name} clientStars={item.node.stars}/>
          <br />
        </div>
      );
    });
    return clientsArray;
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <p className="valuesAndOverview">
          WHAT OUR CLIENTS SAY <span className="blueText">ABOUT US</span>
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="row clientsMarginsAndWidth">
        {getClients(data)}
      </div>
      <br />
      <br />
      <div className="container-fluid">
        <button className="consultationButton">
          <b>BOOK A FREE CONSULTATION</b>
        </button>
      </div>
    </div>
  );
};

export default ClientsSay;
