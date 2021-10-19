import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-about">
              <img src={logo} alt="" />
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-navs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/doctors">Doctors</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-contact">
              <ul>
                <li>
                  <p className="text-muted">
                    <FontAwesomeIcon icon={faEnvelope} /> contact@doctris.com
                  </p>
                </li>
                <li>
                  <p className="text-muted">
                    <FontAwesomeIcon icon={faPhoneAlt} /> +152 534-468-854
                  </p>
                </li>
                <li>
                  <p className="text-muted">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> View on Google
                    Maps
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
