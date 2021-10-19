import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../images/about-img.png";

import "../styles/About.css";

export default function About() {
  return (
    <section id="about">
      <div className="about-heading">
        <Container>
          <div className="page-heading-text text-center">
            <Row className="justify-content-center">
              <Col>
                <h3>About Us</h3>
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
                <span className="d-breadcrumb">
                  Doctris <FontAwesomeIcon icon={faArrowRight} />{" "}
                  <span> About Us</span>
                </span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="section-padding">
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
                  Providing World-class Healthcare Services and International
                  Patient Support. Advanced Tecnologies. JCI Accredited
                  Hospital. Most Experienced Doctor. Services: Airport Services,
                  Business Center, Cultural Helpdesk, Languages Assistance.
                </p>
                <p className="text-muted">
                  Watch Our Virtual Discussion As We Explore New Solutions To
                  Challenges In Digital Health! Increased Collaboration In The
                  Digital Health Field Is Providing Fast Solutions Globally.
                  Driving Positive Change. Advance Your Career. J-1 Visa
                  Services. 130 Countries Worldwide.
                </p>
                <p className="text-muted">
                  In addition to offering traditional and established medical
                  care services, Strong is distinguished with its tertiary and
                  quaternary services. This means Strong has the personnel and
                  facilities to provide advanced medical inquiry and treatments
                  that are not widely accessible in this region.
                </p>
                <p className="text-muted">
                  Whether a patient is coming in for a routine or a specialized
                  procedure, they will always benefit from Strong’s unique
                  ability to quickly implement the newest discoveries and
                  advancements in medicine
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
