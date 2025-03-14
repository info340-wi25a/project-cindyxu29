import React, { useState } from "react";
import { Link } from 'react-router';



export default function ClassMain(props) {
  const classesArray = props.classes;
  console.log("classesArray:" +  classesArray)
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    let newValue = event.target.value
    setInputValue(newValue);
  }

  function filterClasses(classesArray, inputValue) {
    const inputValueLowerCase = inputValue.toLowerCase();
    return classesArray.filter((currClass) =>
      currClass.title.toLowerCase().includes(inputValueLowerCase)
    );
  }
  const filteredClasses = filterClasses(classesArray, inputValue);
  console.log(filteredClasses);


  function renderClassCards(classes) {
    return classes.map((currClass) => <ClassCard key={currClass.id} classObj={currClass} />);
  }
  return (
    <div className="container">
      <div className="d-flex mb-3">
        <input type="text" className="search-input" onChange={handleChange} value={inputValue} placeholder="Search by name..." />
      </div>
      <div className="class-container">
        {renderClassCards(filteredClasses)}
      </div>
    </div>
  );
}


function ClassCard(props) {
  const currClass = props.classObj
  return (
    <div className="card class-card">
      <div className="card-body">
        <h2 className="card-title">{currClass.title}</h2>
        <p>{currClass.duration} min | @{currClass.location} | {currClass.date} | {currClass.time} | {currClass.notes}</p>
        <Link to={`/my-classes/${currClass.id}/poses`} className="btn btn-dark">View Class</Link>
      </div>
    </div>
  )
}

