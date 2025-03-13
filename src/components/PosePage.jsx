import React, { useState } from "react";
import PoseMain from './PoseMain'
import PoseButtons from './PoseButtons';

export default function PosePage({ poses = [] }) {
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
      </main>
    </>
  )
}