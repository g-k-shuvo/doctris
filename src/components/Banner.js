import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Banner.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  return (
    <section id="banner" className="overlay">
      <Container>
        <div className="banner-text">
          <Row>
            <Col>
              <h4>
                Meet The <br /> Best Doctor
              </h4>
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
              <Link to="/doctors" className="d-btn">
                Our Doctors
              </Link>
              <p className="banner-info">
                T&C apply. Please read Terms and Conditions
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
