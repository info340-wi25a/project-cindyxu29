import React, { useState } from "react";
// import Header from './Header';
import ClassMain from './ClassMain';
import ClassButtons from './ClassButtons';
import { useParams } from "react-router";
import SAMPLE_CLASSES from '../data/classes.json';
// import Header

export default function ClassPage(props) {
  const currClasses = props.classes;
  const { classId } = useParams();

  const selectedClass = currClasses.find((c) => c.id === classId);
  
  const [classes, setClasses] = useState(props.classes);

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
        <ClassMain classes={ classes } />
      </main>
    </>
  )
}