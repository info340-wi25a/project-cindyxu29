import React, { useState } from "react";
import { Link } from 'react-router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

// import Button from 

export default function Search(props) {
  const posesList = props.poses;
  const [inputValue, setInputValue] = useState('');

  console.log('poses array: ' + posesList);

  function handleChange(event) {
    let newValue = event.target.value
    setInputValue(newValue);
  }

  function filterPoses(posesList, inputValue) {
    const inputValueLowerCase = inputValue.toLowerCase();
    return posesList.filter((currPose) => 
      currPose.title.toLowerCase().includes(inputValueLowerCase)
    );
  }
  const filteredPoses = filterPoses(posesList, inputValue);
  


  return (
    <div className="container">
      <div className="d-flex mb-3">
        <input type="text" onChange={handleChange} value={inputValue} placeholder="Search by pose name..." />
      </div>
      <div className="row">
        {filteredPoses.map((currPose) => (
          <PoseCard poseObj={currPose} />
        ))}
      </div>
    </div>
  )
}


function PoseCard(props) {
  const currPose = props.poseObj
  return (
    // <Card style={{ width: '20rem' }}>
    <Card>
      <Card.Body>
        <Card.Title>{currPose.title}</Card.Title>
        <Card.Text>{currPose.script}</Card.Text>
        <Link to="/pose">
          <Button variant="dark">Add pose</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}