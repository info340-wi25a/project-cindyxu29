// Ref: https://react-bootstrap.netlify.app/docs/components/modal/
// Ref: https://react-bootstrap.netlify.app/docs/forms/validation
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
  const [validated, setValidated] = useState(false);

  function handleClose() {
    setShow(false);
    resetForm();
  }

  function resetForm() {
    setClassName('');
    setDuration('');
    setLocation('');
    setDate('');
    setTime('');
    setNotes('');
    setValidated(false);
  }

  function handleShow() {
    setShow(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(true);

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
    if (user) {
      const db = getDatabase();
      const classesRef = ref(db, 'users/' + user.uid + '/classes');

      //save uid as property of class
      firebasePush(classesRef, newClass).then((newClassesRef) => {
        firebaseUpdate(newClassesRef, { uid: newClassesRef.key });
      });
    }

    onAddClass(newClass);
    handleClose();

  }

  return (
    <>
      <Button className="class-button" variant="dark" onClick={handleShow}>
        Add Class
      </Button>
      <Link to="/calendar">
        <Button className="class-button" variant="dark">Go to Calendar</Button>
      </Link>

      <Modal show={show} onHide={handleClose} centered="true">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new Class</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Label htmlFor="className">Class Name</Form.Label>
              <Form.Control type="text" id="className" placeholder="Gental Yoga"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="className">Duration (min)</Form.Label>
              <Form.Control type="text" id="duration" placeholder="2"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="className">Location</Form.Label>
              <Form.Control type="text" id="location" placeholder="UW IMA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required />
            </Form.Group>

            <Form.Group>
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

            <Form.Group>
              <Form.Label htmlFor="className">Start Time</Form.Label>
              <Form.Control type="time" id="time" placeholder="2:00pm"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="className">Notes</Form.Label>
              <Form.Control type="text" id="notes" placeholder="Beginning lession for UW students"
                value={notes}
                onChange={(e) => setNotes(e.target.value)} />
            </Form.Group>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Class
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
