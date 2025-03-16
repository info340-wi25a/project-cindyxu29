import React, { useState, useEffect } from "react";
import PoseMain from './PoseMain'
import { useParams } from "react-router";
import PoseButtons from './PoseButtons';
import { getDatabase, ref, push as firebasePush } from 'firebase/database';


export default function PosePage(props) {
  const userClasses = props.classes;
  const { classId } = useParams();

  const selectedClass = userClasses.find(({ id }) => id == classId);

  const [poseList, setPoses] = useState([]);

  // Ensure that classId and userClasses are valid
  if (!classId || !userClasses || userClasses.length === 0) {
    console.log("classId is missing or userClasses is empty");
    return <div>No classes found.</div>; // Or any appropriate error message or redirect
  }
 
  // Check if selectedClass is found
  if (!selectedClass) {
    console.log("Class not found!");
    return <div>Class not found.</div>; // Or any other appropriate message
  }

  // Ensure poses exists in selectedClass
  const posesObj = selectedClass.poses || {};
  const keyArray = Object.keys(posesObj);
  const posesArr = keyArray.map((keyString) => {
    const transformed = posesObj[keyString];
    return {key: keyString, ...transformed};
  });
  

  // Function to move a pose up
  function handleMovePoseUp(index) {
    if (index > 0) {
      const updatedPoses = [...poseList];
      [updatedPoses[index - 1], updatedPoses[index]] = [updatedPoses[index], updatedPoses[index - 1]];
      setPoses(updatedPoses);
    }
  }

  // Function to move a pose down
  function handleMovePoseDown(index) {
    if (index < poseList.length - 1) {
      const updatedPoses = [...poseList];
      [updatedPoses[index + 1], updatedPoses[index]] = [updatedPoses[index], updatedPoses[index + 1]];
      setPoses(updatedPoses);
    }
  }

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
        <PoseMain poses = { poseList } 
          onMovePoseUp={handleMovePoseUp}
          onMovePoseDown={handleMovePoseDown} />
      </main>
    </>
  )
}