import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Error.css";

export default function Error() {
  return (
    <section id="error" className="section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="error-text text-center">
              <h1>Opps! Page Not Found!</h1>
              <Link to="/" className="d-btn">
                Go To Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
