import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/logo.png";
import useAuth from "../hooks/useAuth";
import "../styles/Header.css";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const { user, signOutUser } = useAuth();
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link>
              <img src={logo} alt="Doctris Logo" />
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/doctors">
              <Nav.Link>Doctors</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {user.displayName ? (
              <>
                <LinkContainer to="/appoinment">
                  <Nav.Link>Book Appoinment</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/invoice">
                  <Nav.Link>Invoice</Nav.Link>
                </LinkContainer>
                <p className="h-username">{user.displayName}</p>
                <button className="h-logout" onClick={signOutUser}>
                  <span>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />{" "}
                  </span>{" "}
                  Logout
                </button>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
