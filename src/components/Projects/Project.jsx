import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import chart1 from '../../assets/chart1.png';
import chart2 from '../../assets/chart2.png';
import chart3 from '../../assets/chart3.jpeg';
import './Projects.css';

export default function Project() {
  const projects = [
    {
      title: 'Dashboard de Ventas',
      image: chart1,
      description: 'Visualización de ventas mensuales con KPIs y segmentación por regiones.',
    },
    {
      title: 'Reporte de Ingresos',
      image: chart2,
      description: 'Análisis de ingresos por producto utilizando gráficos interactivos.',
    },
    {
      title: 'Tendencias de Mercado',
      image: chart3,
      description: 'Exploración de tendencias de comportamiento de clientes a lo largo del tiempo.',
    },
  ];

  return (
    <Container fluid className="project-container shadow p-5" id="projects">
      <h2 className="project-title text-center mb-5">Proyectos</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="project-card shadow-sm border-0">
              <Card.Img variant="top" src={project.image} className="project-image" />
              <Card.Body>
                <Card.Title className="fw-bold">{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
