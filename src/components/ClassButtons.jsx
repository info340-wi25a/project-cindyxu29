import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router';


export default function ClassButtons(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Class
      </Button>
      <Link to="/calendar">
        <Button variant="dark">Go to Calendar</Button>
      </Link>


      {/* REACT MODAL */}
      <div>
        <Modal show={show} onHide={handleClose} centered="true">
          <Modal.Header closeButton>
            <Modal.Title>Create a new Class</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="className">
                <Form.Label>Class Name</Form.Label>
                <Form.Control type="text" placeholder="Gental Yoga" maxlength="50" required />
              </Form.Group>
              <Form.Group controlId="duration">
                <Form.Label>Duration (min)</Form.Label>
                <Form.Control type="text" placeholder="2"  required />
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="@UW IMA" required />
              </Form.Group>
              <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="mm/dd/yyyy" required />
              </Form.Group>
              <Form.Group controlId="time">
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="time" placeholder="2:00pm" required />
              </Form.Group>
              <Form.Group controlId="notes">
                <Form.Label>Notes</Form.Label>
                <Form.Control type="text" placeholder="Beginning lession for UW students" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add Class
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
