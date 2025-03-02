import React from "react";
import Header from './Header';
import ClassMain from './ClassMain'
// import Header

export default function ClassPage(props) {
  const classes = props.classes;
  return (
    <>
      <header>
        <Header pageType='class' />
      </header>
      <main>
        <ClassMain classes={classes} />
      </main>
    </>
  )
}