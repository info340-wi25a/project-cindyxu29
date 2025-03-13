import React, { useState } from "react";
import ClassMain from './ClassMain';
import ClassButtons from './ClassButtons';

export default function ClassPage(props) {
  const [classes, setClasses] = useState(props.classes || []);

  function handleAddClass(newClass) {
    setClasses((prevClasses) => [...prevClasses, newClass]); // Update state with new class
  }

  return (
    <>
      <main>
        <div className="header">
          <h1>Classes</h1>
          <ClassButtons onAddClass={handleAddClass} />
        </div>
        <ClassMain classes={classes} />
      </main>
    </>
  )
}