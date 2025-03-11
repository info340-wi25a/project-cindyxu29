import React, { useState } from "react";
import Header from './Header';
import ClassMain from './ClassMain';
import ClassButtons from './ClassButtons';
// import Header

export default function ClassPage(props) {
  const [classes, setClasses] = useState(props.classes || []);

  function handleAddClass(newClass) {
    setClasses((prevClasses) => [...prevClasses, newClass]); // Update state with new class
  }

  return (
    <>
      <header>
        <Header pageType='class' />
      </header>
      <main>
        <ClassButtons onAddClass={handleAddClass} />
        <ClassMain classes={classes} />
      </main>
    </>
  )
}