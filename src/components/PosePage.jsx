import React, { useState } from "react";
import PoseMain from './PoseMain'
import { useParams } from "react-router";
import PoseButtons from './PoseButtons';

export default function PosePage({ classes }) {
  const { classId } = useParams();
  // let poses = props.poses;
  const selectedClass = classes.find(({ id }) => id.toString() === classId.toString());
  const [poseList, setPoses] = useState(selectedClass.poses);
  console.log("selectedClass.poses", selectedClass.poses);
  console.log("poseList", poseList)
  function handleAddPose(newPose) {
    setPoses((prevPoses) => [...prevPoses, newPose]);

    // console.log("prevPoses", prevPoses)
    console.log("newPose", newPose)
    console.log("poseList", poseList)
    console.log("selectedClass", selectedClass)

    // TODO: Update state with new pose
  }
  return (
    <>
      <main>
        <div className="header">
          <h1>Poses in This Class</h1>
          <PoseButtons onAddPose={handleAddPose} />
        </div>
        <PoseMain selectedClass={selectedClass} />
      </main>
    </>
  )
}