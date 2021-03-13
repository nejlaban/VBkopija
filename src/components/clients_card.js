import * as React from "react";

import Card from "react-bootstrap/Card";
import avatarImage from "../images/avatar.png";

const ClientCard = (props) => (
  <Card style={{ width: "25rem", height: "300px" }}>
      <div style={{
          position:'relative', height:'300px'
      }}>
          <img src={avatarImage} className="avatarCorner" alt=''/>
    <Card.Body>
      <Card.Text style={{ paddingLeft: "45px", paddingRight: "12px", height:'100%' }}>
        <p>
          {props.cardText}
        </p>
        <div style={{bottom:'0', position:'absolute'}}>
          <p>⭐⭐⭐⭐⭐</p>
          <p><b>{props.clientName}</b></p>
        </div>
      </Card.Text>
    </Card.Body>
    </div>
  </Card>
);

export default ClientCard;
