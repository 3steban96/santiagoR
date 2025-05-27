import React from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import './ModalCV.css';

export default function ModalCV({ show, onClose }) {
  return (
    <Modal 
      show={show} 
      onHide={onClose} 
      centered 
      className='modalContainer'
      size="xl"
      fullscreen="true"
    >
      <Modal.Header closeButton>
        <Modal.Title>Mi CV</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center h-100">
            <object 
              data='/cv.pdf'
              type="application/pdf" 
              width="100%" 
              height="100%"
              style={{ minHeight: 'calc(90vh - 130px)' }}
            >
            </object>  
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}