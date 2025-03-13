import React from "react";
import Header from './Header';
import PoseMain from './PoseMain'
import { useParams } from "react-router";
// import Header

export default function PosePage({ classes }) {
  const { classId } = useParams();
  // let poses = props.poses;
  return (
    <>
      <header>
        <Header pageType='pose' />
      </header>
      <main>
        <PoseMain classes={classes} classId={classId} />
      </main>
    </>
  )
}