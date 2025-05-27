import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <Container
      fluid
      className="about-me-container shadow pt-5 pb-5"
      id="about"
    >
      <Row className="justify-content-center">
        <Col sm={12} md={10} lg={8}>
          <h2 className="about-title mb-4">Sobre mí</h2>
          <p className="about-text">
            Soy <strong>Santiago Rodríguez</strong>, técnico en Planificación y Servicios Financieros con formación en Marketing y experiencia en áreas administrativas, contables y de atención al cliente.
          </p>
          <p className="about-text">
            Me especializo en el <strong>análisis de datos</strong>, gestión operativa y optimización de procesos mediante herramientas ofimáticas, especialmente Excel.
          </p>
          <p className="about-text">
            He liderado estrategias de <strong>marketing digital</strong>, control contable básico y administración de puntos de venta, lo que me ha permitido desarrollar una visión integral orientada a <strong>resultados</strong> y a la toma de decisiones basadas en datos.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
