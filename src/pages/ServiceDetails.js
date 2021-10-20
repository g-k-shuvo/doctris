import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useService from "../hooks/useService";
import "../styles/ServiceDetails.css";

export default function ServiceDetails() {
  const { id } = useParams();
  const { service } = useService(id);
  return (
    <section id="service-details">
      <div className="service-details-heading">
        <Container>
          <div className="page-heading-text text-center">
            <Row className="justify-content-center">
              <Col>
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} /> - Home
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg={5}>
              <Image src={service.image} alt="" />
            </Col>
            <Col lg={7}>
              <div className="service-detail-text">
                <h3>{service.title}</h3>
                <p className="text-muted">{service.description}</p>
                <Link to="/appoinment" className="d-btn">
                  Make An Apponment
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
