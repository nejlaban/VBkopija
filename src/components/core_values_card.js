import * as React from "react";

import Card from "react-bootstrap/Card";

const CoreValuesCard = (props) => (
  <Card className="card">
    <Card.Header className="cardHeader">
      <div className="row">
        <div className="col-8">
          <h5 className='cardTitle'>
            {props.cardTitle}
          </h5>
        </div>
        <div className="col-4 topPadding20px">
          <h3 className='cardNumber'>
            {props.cardNumber}
          </h3>
        </div>
      </div>
    </Card.Header>
    <div className='cardTextDiv'>
      <Card.Text className='cardText'>{props.cardText}</Card.Text>
    </div>
  </Card>
);

export default CoreValuesCard;
