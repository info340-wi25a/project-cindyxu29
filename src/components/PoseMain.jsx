import React from "react";
import Timer from './Timer';
import Button from 'react-bootstrap/Button';
import PoseButtons from './PoseButtons';

function PoseCard({ pose }) {
  // let pose = props.pose;
  return (
    <div className="d-flex" >
      <div className="pose mb-4" >
        <div className="pose-body" >
          <h2 className="pose-title">{pose.title}</h2>
          <p>
            <strong>Duration</strong>: {pose.duration} min | <strong>Script</strong>: {pose.script}
          </p>
          <Button href="#" className="btn btn-dark">
            <span className="material-icons icon-btn">
              arrow_upward</span>
          </Button>
          <Button href="#" className="btn btn-dark">
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
  let poses = props.poses;

  console.log(poses)
  let poseCards = poses.map((pose, index) => {
    console.log(pose)
    return < PoseCard key={index} pose={pose} />;
  })

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