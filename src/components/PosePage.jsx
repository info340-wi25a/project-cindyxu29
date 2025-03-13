import React, { useState } from "react";
import PoseMain from './PoseMain'
import { useParams } from "react-router";
// import Header
import PoseButtons from './PoseButtons';

export default function PosePage({ classes, poses = [] }) {
  const { classId } = useParams();
  const [poseList, setPoses] = useState(poses);

  function handleAddPose(newPose) {
    setPoses((prevPoses) => [...prevPoses, newPose]); // Update state with new pose
  }

  return (
    <>
      <main>
        <div className="header">
          <h1>Poses in This Class</h1>
          <PoseButtons onAddPose={handleAddPose} />
        </div>
        <PoseMain poses={poseList} />
        <PoseMain classes={classes} classId={classId} />
      </main>
    </>
  )
}