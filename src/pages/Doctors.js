import React from "react";
import "../styles/Doctors.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useDoctors from "../hooks/useDoctors";
import Loader from "../components/Loader";
import Doctor from "../components/Doctor";

export default function AllDoctors() {
  const [loading, doctors] = useDoctors();
  return (
    <section id="all-doctors">
      <div className="all-doctors-heading">
        <Container>
          <div className="page-heading-text text-center">
            <Row className="justify-content-center">
              <Col>
                <h3>Our Doctors</h3>
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
                <span className="d-breadcrumb">
                  Doctris <FontAwesomeIcon icon={faArrowRight} />{" "}
                  <span>Doctors</span>
                </span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="all-doctors-list section-padding">
        <Container>
          {loading ? (
            <Row>
              <Loader />
            </Row>
          ) : (
            <Row className="gy-5">
              {doctors.map((doctor) => (
                <Col key={doctor.id} md={3}>
                  <Doctor doctor={doctor} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
    </section>
  );
}
