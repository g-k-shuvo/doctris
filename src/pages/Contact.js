import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Contact.css";
import contactFormImage from "../images/about-img.png";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-heading">
        <Container>
          <div className="page-heading-text text-center">
            <Row className="justify-content-center">
              <Col>
                <h3>Get In Touch</h3>
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
                <span className="d-breadcrumb">
                  Doctris <FontAwesomeIcon icon={faArrowRight} />{" "}
                  <span>Contact</span>
                </span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="contact-info section-padding">
        <Container>
          <Row className="gy-5">
            <Col md={4}>
              <div className="contact-item">
                <div className="contact-icon">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                </div>
                <div className="contact-body">
                  <h5>Phone</h5>
                  <p>
                    Great doctor if you need your family member to get effective
                    assistance
                  </p>
                  <h5>+152 534-468-854</h5>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <div className="contact-icon">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </div>
                <div className="contact-body">
                  <h5>Email</h5>
                  <p>
                    Great doctor if you need your family member to get effective
                    assistance
                  </p>
                  <h5>contact@doctris.com</h5>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <div className="contact-icon">
                  <div className="icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                </div>
                <div className="contact-body">
                  <h5>Address</h5>
                  <p>
                    Great doctor if you need your family member to get effective
                    assistance
                  </p>
                  <h5>View on Google Map</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding contact-form-container">
        <Container>
          <Row>
            <Col lg={5} md={6}>
              <div className="contact-form-image">
                <img className="img-fluid" src={contactFormImage} alt="" />
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div className="contact-form">
                <h5 className="mb-4">Send A Message!</h5>
                <form method="post" name="myForm">
                  <p id="error-msg"></p>
                  <div id="simple-msg"></div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control border rounded"
                          placeholder="First Name :"
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
                          className="form-control border rounded"
                          placeholder="Your email :"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-control border rounded"
                          placeholder="Your subject :"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Comments <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control border rounded"
                          placeholder="Your Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <button
                        type="submit"
                        disabled
                        id="submit"
                        name="send"
                        className="btn btn-primary"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
