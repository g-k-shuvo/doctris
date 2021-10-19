import React from "react";
import "../styles/Doctors.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Appoinment() {
  return (
    <section id="appoinment">
      <div className="all-doctors-heading">
        <Container>
          <div className="page-heading-text text-center">
            <Row className="justify-content-center">
              <Col>
                <h3>Book An Appoinment</h3>
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
                <span className="d-breadcrumb">
                  Doctris <FontAwesomeIcon icon={faArrowRight} />{" "}
                  <span>Appoinment</span>
                </span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="appoinment-form-container section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <form>
                <Row className="justify-content-center">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Patient Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Patient Name :"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Departments</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Departments :"
                      />
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-2-gj38"
                        style={{ width: "332px" }}
                      >
                        <span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Doctor</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Doctor :"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Your Email <span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your email :"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Your Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        name="phone"
                        id="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone :"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Comments <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control"
                        placeholder="Your Message :"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="d-grid">
                      <button
                        type="submit"
                        disabled
                        className="btn btn-primary"
                      >
                        Book An Appointment
                      </button>
                    </div>
                  </div>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
