import React, { useState } from 'react';
import { Link } from 'react-router'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function PoseButtons({ onAddPose }) {
  const [show, setShow] = useState(false);
  const [poseName, setPoseName] = useState('');
  const [duration, setDuration] = useState('');
  const [script, setScript] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const newPose = {
      id: Date.now(),
      title: poseName,
      duration: duration,
      script: script,
    };
    onAddPose(newPose); // Pass new pose to parent component
    handleClose(); // Close modal after submitting

    // Clear form fields
    setPoseName('');
    setDuration('');
    setScript('');
  };

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
            <PoseModalForm
              poseName={poseName}
              setPoseName={setPoseName}
              duration={duration}
              setDuration={setDuration}
              script={script}
              setScript={setScript}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Add Pose
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

function PoseModalForm({ poseName, setPoseName, duration, setDuration, script, setScript }) {
  return (
    <Form>
      <Form.Group controlId='poseName'>
        <Form.Label>Pose Name</Form.Label>
        <Form.Control type='text' placeholder='Tree Pose' value={poseName}
          onChange={(e) => setPoseName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId='duration'>
        <Form.Label>Duration (min)</Form.Label>
        <Form.Control type='text' placeholder='2' value={duration}
          onChange={(e) => setDuration(e.target.value)} />
      </Form.Group>
      <Form.Group controlId='script'>
        <Form.Label>Script</Form.Label>
        <Form.Control type='text' placeholder='Inhale, lift your hands to the sky. Exhale, ground your feet to the earth' 
          value={script}
          onChange={(e) => setScript(e.target.value)} />
      </Form.Group>
    </Form>
  )
}