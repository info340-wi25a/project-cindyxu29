import React, { useState } from 'react';
import { Link } from 'react-router'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function PoseButtons(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Pose
      </Button>
      <Link to="/posesearch">
        <Button variant="dark">Search for poses</Button>
      </Link>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new Pose</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PoseModalForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add Pose
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

function PoseModalForm(props) {
  return (
    <Form>
      <Form.Group controlId='poseName'>
        <Form.Label>Pose Name</Form.Label>
        <Form.Control type='text' placeholder='Tree Pose' />
      </Form.Group>
      <Form.Group controlId='duration'>
        <Form.Label>Duration (min)</Form.Label>
        <Form.Control type='text' placeholder='2' />
      </Form.Group>
      <Form.Group controlId='script'>
        <Form.Label>Script</Form.Label>
        <Form.Control type='text' placeholder='Inhale, lift your hands to the sky. Exhale, ground your feet to the earth' />
      </Form.Group>
    </Form>
  )
}