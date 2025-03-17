import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ref, push as firebasePush, update as firebaseUpdate, getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';


export default function PoseButtons(props) {
  const [show, setShow] = useState(false);
  const [poseName, setPoseName] = useState('');
  const [duration, setDuration] = useState('');
  const [script, setScript] = useState('');
  const [isImageOpen, setImageOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const classUID = props.classUID;
  const onAddPose = props.onAddPose;

  const handleSubmit = () => {
    const newPose = {
      id: Date.now(),
      title: poseName,
      duration: duration,
      script: script,
    };
    //FIREBASE
    const auth = getAuth();
    const user = auth.currentUser;

    if(user){
    const db = getDatabase();
    const posesRef = ref(db, 'users/' + user.uid + '/classes/' + classUID + '/poses/');
    
    firebasePush(posesRef, newPose).then((newPoseRef) => {
      firebaseUpdate(newPoseRef, { uid: newPoseRef.key });
    });

    onAddPose(newPose); 
    handleClose();

    setPoseName('');
    setDuration('');
    setScript('');
    }
  };

  const handleImageClick = () => {
    setImageOpen(true);
  };

  const handleCloseImage = () => {
    setImageOpen(false);
  };


  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Pose
      </Button>
      <Button variant="dark" onClick={handleImageClick} className="show-image-btn">
        Yoga Poses Guide
      </Button>

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

        {isImageOpen && (
        <div className="overlay" onClick={handleCloseImage}>
          <img 
            src="../../img/yoga-pose.jpg" 
            alt="Yoga Poses Guide"
            className="popup-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        )}
      </div>
    </>
  )
}

function PoseModalForm({ poseName, setPoseName, duration, setDuration, script, setScript }) {
  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor="className">Pose Name</Form.Label>
        <Form.Control type='text' id="poseName" placeholder='Tree Pose' value={poseName}
          onChange={(e) => setPoseName(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="className">Duration (min)</Form.Label>
        <Form.Control type='text' id="duration" placeholder='2' value={duration}
          onChange={(e) => setDuration(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="className">Script</Form.Label>
        <Form.Control type='text' id="script" placeholder='Inhale, lift your hands to the sky. Exhale, ground your feet to the earth'
          value={script}
          onChange={(e) => setScript(e.target.value)} />
      </Form.Group>
    </Form>
  )
}