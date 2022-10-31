import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomeCard } from "./CustomeCard";

export const MovieList = () => {
  return (
    <div className="bg-dark py-5 rounded p-2">
      <Row>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="success">All</Button>
            <Button variant="primary">Happy</Button>
            <Button variant="danger">Lazy</Button>
          </ButtonGroup>
          <p className="mt-3">5 Movie Found</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap justify-content-around gap-3">
          <CustomeCard />
        </Col>
      </Row>
    </div>
  );
};
