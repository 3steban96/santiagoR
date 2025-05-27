import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id.replace('form', '').toLowerCase()]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const mailtoLink = `mailto:santiago.sr613@gmail.com?subject=Contacto de ${formData.name}&body=${formData.message}%0A%0AEmail de contacto: ${formData.email}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <Container fluid className="contact-container shadow p-5" id="contact">
      <Card className="border-0 rounded-4 shadow-sm">
        <Card.Body>
          <h2 className="contact-title text-center mb-4">Contacto</h2>
          <Row className="justify-content-center">
            <Col sm={12} md={8} lg={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Ingrese su nombre" 
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Ingrese su correo electrónico" 
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Escriba su mensaje aquí" 
                    onChange={handleChange}
                    value={formData.message}
                    required
                  />
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