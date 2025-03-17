import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router';
import { ref, push as firebasePush, getDatabase, update as firebaseUpdate } from 'firebase/database';
import { getAuth } from 'firebase/auth';



export default function ClassButtons({ onAddClass }) {
  const [show, setShow] = useState(false);
  const [className, setClassName] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  function handleClose() {
    setShow(false);
  }
  
  function handleShow() {
    setShow(true);
  }

  function handleSubmit() {
    const newClass = {
      id: Date.now(),
      title: className,
      duration: duration,
      location: location,
      dayOfWeek: date,
      time: time,
      notes: notes,
      poses: {}
    };
    //FIREBASE
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
      const db = getDatabase();
      const classesRef = ref(db, 'users/' + user.uid + '/classes');
      
      //save uid as property of class
      firebasePush(classesRef, newClass).then((newClassesRef) => {
        firebaseUpdate(newClassesRef, { uid: newClassesRef.key });
      });
    }

    onAddClass(newClass);
    handleClose();

    // Clear input fields
    setClassName('');
    setDuration('');
    setLocation('');
    setDate('');
    setTime('');
    setNotes('');
  }

  return (
    <>
      <Button className="class-button" variant="dark" onClick={handleShow}>
        Add Class
      </Button>
      <Link to="/calendar">
        <Button className="class-button" variant="dark">Go to Calendar</Button>
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
                <Form.Label htmlFor="className">Class Name</Form.Label>
                <Form.Control type="text" id="className" placeholder="Gental Yoga" 
                  value={className} 
                  onChange={(e) => setClassName(e.target.value)}
                  required />
              </Form.Group>
              <Form.Group controlId="duration">
                <Form.Label htmlFor="className">Duration (min)</Form.Label>
                <Form.Control type="text" id="duration" placeholder="2" 
                  value={duration} 
                  onChange={(e) => setDuration(e.target.value)}
                  required />
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label htmlFor="className">Location</Form.Label>
                <Form.Control type="text" id="location" placeholder="UW IMA" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  required />
              </Form.Group>
              
              <Form.Group controlId="dayOfWeek">
              <Form.Label htmlFor="className">Day of Week</Form.Label>
              <Form.Control as="select" id="dayOfWeek"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              >
                <option value="">Select day</option>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </Form.Control>
              </Form.Group>
              <Form.Group controlId="time">
                <Form.Label htmlFor="className">Start Time</Form.Label>
                <Form.Control type="time" id="time" placeholder="2:00pm" 
                  value={time} 
                  onChange={(e) => setTime(e.target.value)}
                  required />
              </Form.Group>
              <Form.Group controlId="notes">
                <Form.Label htmlFor="className">Notes</Form.Label>
                <Form.Control type="text" id="notes" placeholder="Beginning lession for UW students" 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Add Class
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
