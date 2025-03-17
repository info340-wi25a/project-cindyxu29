import React from "react";
import Timer from './Timer';
import Button from 'react-bootstrap/Button';
import PoseButtons from './PoseButtons';
import {remove} from 'firebase/database';

function PoseCard(props) {
  const pose = props.pose;
  const index = props.index;
  const onMovePoseUp = props.onMovePoseUp;
  const onMovePoseDown = props.onMovePoseDown;
  const handlePoseDelete = props.handlePoseDelete;

  function handleMoveUp() {
    onMovePoseUp(index);
  }
  function handleMoveDown() {
    onMovePoseDown(index);
  }
  function handleDelete() {
    handlePoseDelete(pose);
  }
  
  return (
    <div className="d-flex" >
      <div className="pose mb-4" >
        <div className="pose-body" >
          <h2 className="pose-title">{pose.title}</h2>
          <p>
            <strong>Duration</strong>: {pose.duration} min | <strong>Script</strong>: {pose.script}
          </p>
          <Button onClick={handleMoveUp} className="btn btn-dark">
            <span className="material-icons icon-btn">
              arrow_upward</span>
          </Button>
          <Button onClick={handleMoveDown} className="btn btn-dark">
            <span className="material-icons icon-btn">
              arrow_downward</span>
          </Button>
          <Button onClick={handleDelete} className="btn btn-dark">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function PoseMain(props) {
  const poses = props.poses;
  const onMovePoseUp = props.onMovePoseUp;
  const onMovePoseDown = props.onMovePoseDown;
  const handlePoseDelete = props.handlePoseDelete;

  const poseCards = poses.map((pose, index) => {
    return (
      <PoseCard
      key={pose.uid || index}
        index={index}
        pose={pose}
        onMovePoseUp={onMovePoseUp}
        onMovePoseDown={onMovePoseDown}
        handlePoseDelete={handlePoseDelete}
      />
    );
  });

  return (
    <main>
      <div className="container">
        <div className="row">
          {poseCards}
        </div >
        <div className="instruction-container">
          <h3>Plan Your Yoga Classes with Ease</h3>
          <p className="instructions">
            This website is designed to help you easily plan and manage your weekly yoga classes. Start by adding a class you'll be teaching in "My Classes". Make sure to select the day of the week you'll be teaching that class, and you'll be able to view your weekly schedule in the calendar! You can then customize the class by adding the yoga poses you'll carry out in that class.
          </p>
          <p className="instructions">
            Use our yoga poses guide for inspiration and guidance. When the class begins, set the timer to keep your session on track! This tool is here to simplify your preparation, allowing you to focus more on teaching and less on planning. Feel free to update your schedule each week, making adjustments as needed to fit your teaching rhythm and enjoy yoga!
          </p>
      </div>
      </div >
      <div className="timer-container">
        <Timer />
      </div>
    </main>
  )
}