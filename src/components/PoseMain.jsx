import React from "react";
import Timer from './Timer';
import Button from 'react-bootstrap/Button';
import PoseButtons from './PoseButtons';

function PoseCard({ pose, index, onMovePoseUp, onMovePoseDown  }) {
  // let pose = props.pose;
  return (
    <div className="d-flex" >
      <div className="pose mb-4" >
        <div className="pose-body" >
          <h2 className="pose-title">{pose.title}</h2>
          <p>
            <strong>Duration</strong>: {pose.duration} min | <strong>Script</strong>: {pose.script}
          </p>
          <Button onClick={() => onMovePoseUp(index)} className="btn btn-dark">
            <span className="material-icons icon-btn">
              arrow_upward</span>
          </Button>
          <Button onClick={() => onMovePoseDown(index)} className="btn btn-dark">
            <span className="material-icons icon-btn">
              arrow_downward</span>
          </Button>
          <Button href="#" className="btn btn-dark">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

// export default function PoseMain({ classes, classId }) {
export default function PoseMain(props) {
  const { poses, onMovePoseUp, onMovePoseDown } = props;

  const poseCards = poses.map((pose, index) => {
    return (
      <PoseCard
        key={index}
        index={index}
        pose={pose}
        onMovePoseUp={onMovePoseUp}
        onMovePoseDown={onMovePoseDown}
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