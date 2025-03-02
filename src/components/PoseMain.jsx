import React from "react";
import Timer from './Timer'

export default function PoseMain({ poses }) {
  // let poses = props.poses;
  let poseCards = poses.map((pose) => {
    return < PoseCard key={pose.title} pose={pose} />;
  })

  return (
    <main>
      <div className="container">
        <div className="row">
          {poseCards}
        </div >
      </div >
      <Timer />
    </main>
  )
}

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
          <a href="#" className="btn btn-dark">
            <span className="material-icons" style={{ fontSize: "20px", verticalAlign: "middle" }}>
              arrow_upward</span>
          </a>
          <a href="#" className="btn btn-dark">
            <span className="material-icons" style={{ fontSize: "20px", verticalAlign: "middle" }}>
              arrow_downward</span>
          </a>
          <a href="#" className="btn btn-dark">
            Edit
          </a>
          <a href="#" className="btn btn-dark">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}