import React, { useState } from "react";
import PoseMain from './PoseMain'
import { useParams } from "react-router";
import PoseButtons from './PoseButtons';

export default function PosePage(props) {
  const poses = props.poses;

  //transform object json into array
  const keyArray = Object.keys(poses);
  const posesArr = keyArray.map((keyString) => {
    const transformed = poses[keyString];
    return {key: keyString, ...transformed};
  })

  console.log(posesArr);
  // get class id from url



  // const posesArr = props.poses; 

  // const keyArray = Object.keys(props.classes);
  // const posesArr = keyArray.map((keyString) => {
  //   const transformed = poses[keyString];
  //   return {key: keyString, ...transformed};
  // })
  // console.log(posesArr);


  const { classId } = useParams();
  // const selectedClass = posesArr.find(({ id }) => id.toString() === classId.toString());
  const [poseList, setPoses] = useState(posesArr);
  // console.log("selectedClass.poses", selectedClass.poses);
  // console.log("poseList", poseList)
  function handleAddPose(newPose) {
    setPoses((prevPoses) => [...prevPoses, newPose]);

    // console.log("prevPoses", prevPoses)
    console.log("newPose", newPose)
    console.log("poseList", poseList)
    // console.log("selectedClass", selectedClass)

    // TODO: Update state with new pose
  }
  return (
    <>
      <main>
        <div className="header">
          <h1>Poses in This Class</h1>
          <PoseButtons onAddPose={handleAddPose} />
        </div>
        <PoseMain poses = { posesArr } />
      </main>
    </>
  )
}