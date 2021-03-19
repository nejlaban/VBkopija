import * as React from "react";

import Card from "react-bootstrap/Card";
import avatarImage from "../images/avatar.png";

const ClientCard = (props) => (
  <Card className='clientCard'>
      <div className='cardDiv'>
          {/* <img src={avatarImage} className="avatarCorner" alt=''/> */}
          <img src={props.clientImage} className="avatarCorner" alt=''/>
    <Card.Body>
      <Card.Text className='cardText2'>
        <p>
          {props.cardText}
        </p>
        <div className='cardTextDiv2'>
          <p>{props.clientStars}</p>
          <p><b>{props.clientName}</b></p>
        </div>
      </Card.Text>
    </Card.Body>
    </div>
  </Card>
);

export default ClientCard;
