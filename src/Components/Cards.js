import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Cards extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.student.email}</Card.Title>

            <Card.Text>
              Phone Number: {this.props.student.mobileNumber}
            </Card.Text>
            <Card.Text>Class(gen): {this.props.student.gen}</Card.Text>

            <Button variant="info">Edit/Update</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cards;
