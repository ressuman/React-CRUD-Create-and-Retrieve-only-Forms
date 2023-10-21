import React from "react";
import Cards from "./Cards";
import { Col, Row } from "react-bootstrap";

function Lists(props) {
  return (
    <Row>
      {props.students.map((student, index) => {
        return (
          <Col key={student.id}>
            <Cards student={student} />
          </Col>
        );
      })}
    </Row>
  );
}

export default Lists;
