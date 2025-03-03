import React, { useState } from "react";
import { Link } from 'react-router';



export default function ClassMain(props) {
  const classesArray = props.classes;
  const [inputValue, setInputValue] = useState('');

  let handleChange = (event) => {
    let newValue = event.target.value
    setInputValue(newValue);
  }

  const filteredClasses = classesArray.filter((currClass) => {
    const currClassLowerCase = currClass.title.toLowerCase();
    const inputValueLowerCase = inputValue.toLowerCase();
    return currClassLowerCase.includes(inputValueLowerCase);
  });
  console.log(filteredClasses);



  return (
    <div className="container">
      <div className="d-flex justify-content-begin mb-3"> 
      <input type="text" onChange={handleChange} value={inputValue} placeholder="Search by name..." />
      </div>
        <div className="row">
          {filteredClasses.map((currClass) => (
            <ClassCard classObj={currClass}/>
          ))}
        </div>
    </div>
  )
}


function ClassCard(props) {
  const currClass = props.classObj
  return(
    <div className="col-md-6 col-xl-3 d-flex">
      <div className="card mb-4">
        <div className="card-body">
          <div className="col-sm">
            <h2 className="card-title">{currClass.title}</h2>
            <p>{currClass.duration} min | @{currClass.location} | {currClass.date} | {currClass.time} | {currClass.notes}</p>
            <Link to="../pose" className="btn btn-dark">View Class</Link>
          </div>
      </div>
    </div>
  </div>
  )
}

