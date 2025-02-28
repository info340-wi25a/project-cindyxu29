import React from "react";
import Header from './Header';
import PoseMain from './PoseMain'
// import Header

export default function PosePage() {
  return (
    <>
      <header>
        <Header pageType='pose' />
      </header>
      <main>
        <PoseMain />
      </main>
    </>
  )
}