import React from "react";
import { Card } from "react-bootstrap";
import ("./cards.css");

function Cards(props){
    return(
        <Card style={{ width: '18rem'}}>
          <Card.Body>
            <Card.Title>{props.cardTitle}</Card.Title>
            <Card.Text>
             {props.cardText}
            </Card.Text>
          </Card.Body>
        </Card>     
      
    )
}
export default Cards