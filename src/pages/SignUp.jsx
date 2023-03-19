import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../scripts/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import img from "../assets/images/signup.png";
import logo from "../assets/images/logo.png";

export default function SignUp() {
  const [email, setEmail] = useState("katherojas@novareacademy.com");
  const [password, setPassword] = useState("kathe1234");
  const [formSubmit, setFormSubmit] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const result = await createAccount(email, password);

    if (result.status === true) {
      setFormSubmit(true);
      navigate('/secret-page')
    } else {
      alert("Sign up has failed. Try again");
    }
  }

  return (
    <div className="signup">
      <Container fluid>
        <Row xs={1} lg={2}>
          <Col>
            <Image src={img} />
          </Col>
          <Col>
            <Form
              className="form-container"
              onSubmit={(event) => onSubmit(event)}
            >
              <Image src={logo} fluid className="logo-img" />
              <span>
                {formSubmit && "Your account was succesfully created!"}
              </span>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <div className="btn-container">
                <Button className="submit-btn" type="submit">
                  Create account
                </Button>
                <Link to="/">
                  <Button variant="link" className="links">Go back to login</Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
