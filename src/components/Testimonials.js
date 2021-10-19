import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import useTestimonials from "../hooks/useTestimonials";
import Loader from "./Loader";
import "../styles/Testimonials.css";

export default function Testimonials() {
  const [loading, testimonials] = useTestimonials();

  return (
    <section id="testimonials" className="section-padding">
      <Container>
        <div className="section-heading">
          <span className="subtitle">Testimonials</span>
          <h3>What Clients Say</h3>
        </div>
        {loading ? (
          <Row>
            <Loader />
          </Row>
        ) : (
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <Carousel
                controls={false}
                variant="dark"
                className="d-testimonials"
              >
                {testimonials.map((testimonial) => (
                  <Carousel.Item key={testimonial.id}>
                    <div className="carousel-content">
                      <p className="text-muted">
                        <i>{testimonial.feedback}</i>
                      </p>
                      <img src={testimonial.image} alt="" />
                      <h6>- {testimonial.name}</h6>
                    </div>
                  </Carousel.Item>
                ))}
                {/* <div className="carousel-content">
                  <h1>{testimonial.feedback}</h1>
                </div> */}
              </Carousel>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}
