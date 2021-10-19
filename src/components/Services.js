import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useServices from "../hooks/useServices";
import Loader from "./Loader";
import ServiceItem from "./ServiceItem";

export default function Services() {
  const [loading, services] = useServices();
  return (
    <section id="services" className="section-padding">
      <Container>
        <div className="section-heading">
          <span className="subtitle">Departments</span>
          <h3>Our Medical Services</h3>
        </div>
        {loading ? (
          <Row>
            <Loader />
          </Row>
        ) : (
          <Row className="gy-5">
            {services.map((service) => (
              <Col key={service.id} md={3}>
                <ServiceItem service={service} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}
