import * as React from "react";

import Card from "react-bootstrap/Card";

import { FiBookmark } from 'react-icons/fi';

const InsightsCard = (props) => (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body style={{height:'400px', position:'relative'}}>
        <Card.Title className='blueText' style={{fontWeight: 'bold'}}>{props.blueText}</Card.Title>
        <Card.Title style={{fontWeight: 'bold'}}>
          {props.boldText}
        </Card.Title>
        <Card.Title>
          {props.text}
        </Card.Title>
        <Card.Text className='blueText' style={{position:'absolute', bottom:'20px', fontSize:'20px'}}>
            read more
        </Card.Text>
        <FiBookmark style={{position:'absolute', bottom:'40px', right:'10px', fontSize:'20px'}}/>
      </Card.Body>
    </Card>
);

export default InsightsCard;
