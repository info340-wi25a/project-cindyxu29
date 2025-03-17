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

// export default function PoseMain({ classes, classId }) {
export default function PoseMain(props) {
  const poses = props.poses;
  const onMovePoseUp = props.onMovePoseUp;
  const onMovePoseDown = props.onMovePoseDown;
  const handlePoseDelete = props.handlePoseDelete;

  const poseCards = poses.map((pose, index) => {
    return (
      <PoseCard
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
      </div >
      <div className="timer-container">
        <Timer />
      </div>
    </main>
  )
}