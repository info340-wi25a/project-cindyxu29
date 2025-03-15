import React, { useState, useEffect } from "react";
import PoseMain from './PoseMain'
import { useParams } from "react-router";
import PoseButtons from './PoseButtons';
import { getDatabase, ref, push as firebasePush } from 'firebase/database';


export default function PosePage(props) {
  const userClasses = props.classes;
  const { classId } = useParams();
  const selectedClass = userClasses.find(({ id }) => id == classId);
  // extract poses from selected class object and pass to posemain
  if (!selectedClass) {
    console.log("class not found!");
  }

  // selectedClass.poses stores obj of poses, convert to array of just poses

  const posesObj = selectedClass.poses || {};
  const keyArray = Object.keys(posesObj);
  const posesArr = keyArray.map((keyString) => {
    const transformed = posesObj[keyString];
    return {key: keyString, ...transformed};
  });
  const [poseList, setPoses] = useState(posesArr);

  function handleAddPose(newPose) {
    setPoses((prevPoses) => [...prevPoses, newPose]);
    console.log("newPose", newPose)
    console.log("poseList", poseList)
  }
  return (
    <>
      <main>
        <div className="header">
          <h1>Poses in This Class</h1>
          <PoseButtons onAddPose={handleAddPose} classUID = {selectedClass.uid}/>
        </div>
        <PoseMain poses = { poseList } />
      </main>
    </>
  )
}