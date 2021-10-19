import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import useServices from "../hooks/useServices";

export default function ServiceDetails() {
  const { id } = useParams();
  const intId = parseInt(id);

  const [loading, services] = useServices();
  let service = services.find((item) => item.id === intId);

  return (
    <section className="section-padding">
      <Container>
        {loading ? (
          <Row>
            <Col lg={5}>
              <div className="service-details-img">
                <Image src={service.image} />
              </div>
            </Col>
            <Col lg={7}>
              <div className="service-details-text">
                <h3>{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            </Col>
          </Row>
        ) : (
          <Loader />
        )}
      </Container>
    </section>
  );
}
