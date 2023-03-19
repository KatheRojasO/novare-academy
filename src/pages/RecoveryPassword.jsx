import React, { useState } from "react";
import { Link } from "react-router-dom";
import { recoverAccount } from "../scripts/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import img from "../assets/images/recovery-password.png";
import logo from "../assets/images/logo.png";

export default function RecoveryPassword() {
  const [email, setEmail] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const result = await recoverAccount(email);

    if (result.status === true) {
      setFormSubmit(true)
    } else {
      alert(`Cannot recover account, ${result.message}!`);
    }
  }
  return (
    <div className="recovery-password">
      <Container fluid>
        <Row xs={1} lg={2}>
          <Col>
            <Image src={img} className="page-img"/>
          </Col>
          <Col>
            <Form
              className="form-container"
              onSubmit={(event) => onSubmit(event)}
            >
              <Image src={logo} fluid className="logo-img" />
              <span>
                {formSubmit && "We have sent you a link to recover your account. Please check your spam folder!"}
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
              <div className="btn-container">
                <Button className="submit-btn" type="submit">
                  Recover account
                </Button>
                <Link to="/">
                  <Button variant="link" className="links">
                    Go back to login
                  </Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
