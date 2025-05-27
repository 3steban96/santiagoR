import { Col, Container, Image, Row } from 'react-bootstrap';
import photoProfile from '../../assets/photoProfile.png';
import './Hero.css';
import { Linkedin } from 'react-bootstrap-icons';
import React, { useState } from 'react';
import ModalCV from '../ModalCV/ModalCV';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  const handleVisibleModal = () => {
    setVisible(!visible);
  };

  return (
    <Container fluid className="hero-container d-flex justify-content-center align-items-center shadow" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={6} className="text-center mb-4">
          <h1 className="hero-title">Hola, soy Santiago Rodríguez</h1>
          <p className="hero-subtitle">
            Analista de Datos especializado en transformar información en decisiones estratégicas.
          </p>
          <div className="d-flex justify-content-center flex-wrap">
            <button className="btn btn-primary hero-button" onClick={handleVisibleModal}>
              Ver mi CV
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary hero-button d-flex align-items-center"
            >
              <Linkedin size={20} className="me-2" />
              LinkedIn
            </a>
          </div>
        </Col>
        <Col sm={12} md={6} className="text-center">
          <div className="hero-img-container">
            <Image src={photoProfile} alt="Foto de perfil de Santiago Rodríguez" className="hero-img" />
          </div>
        </Col>
      </Row>

      <ModalCV show={visible} onClose={handleVisibleModal} />
    </Container>
  );
}
