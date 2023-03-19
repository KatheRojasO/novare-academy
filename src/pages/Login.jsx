import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/images/login.png";
import logo from "../assets/images/logo.png";

export default function Login() {
  return (
    <div className="login">
      <Container fluid>
        <Row xs={1} lg={2}>
          <Col>
            <Image src={img} />
          </Col>
          <Col>
            <Form className="form-container">
              <Image src={logo} fluid className="logo-img" />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="submit-btn" type="submit">
                Log in
              </Button>
              <div className="btn-container">
                <Link to="/recoverypassword">
                  <Button variant="link" className="links">Forgot your password?</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="link" className="links">Don't have an account?</Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
