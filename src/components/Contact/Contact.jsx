import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Contact.css';

export default function Contact() {
  return (
    <Container fluid className="contact-container shadow p-5" id="contact">
      <Card className="border-0 rounded-4 shadow-sm">
        <Card.Body>
          <h2 className="contact-title text-center mb-4">Contacto</h2>
          <Row className="justify-content-center">
            <Col sm={12} md={8} lg={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Escriba su mensaje aquí" />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" variant="primary" className="px-4 py-2">
                    Enviar
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
