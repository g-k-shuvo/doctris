import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutImg from "../images/about-img.png";
import "../styles/AboutUs.css";

export default function AboutUs() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={6}>
            <div className="about-img">
              <img src={aboutImg} alt="Doctris" />
            </div>
          </Col>
          <Col lg={7} md={6}>
            <div className="about-text">
              <h4>About Our Treatments</h4>
              <p className="text-muted">
                Great doctor if you need your family member to get effective
                immediate assistance, examination, emergency treatment or a
                simple consultation. Thank you.
              </p>
              <p className="text-muted">
                The most well-known dummy text is the 'Lorem Ipsum', which is
                said to have originated in the 16th century. Lorem Ipsum is
                composed in a pseudo-Latin language which more or less
                corresponds to 'proper' Latin. It contains a series of real
                Latin words.
              </p>
              <Link to="/about" className="d-btn">
                Read More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
