import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Card style={{ width: '28rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://www.mywebworld.in/wp-content/uploads/2018/05/web-design-kerala.gif"
       width={'100%'}height={'300px'} />
      <Card.Body>
        <Card.Title className='text-center'>Project Title</Card.Title>

      </Card.Body>
    </Card>

    <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
        
    </div>
  )
}

export default ProjectCard