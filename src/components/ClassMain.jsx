import React from "react";
import { Link } from 'react-router';



export default function ClassMain(props) {
  const classesArray = props.classes;

  return (
      <div className="container">
        <div className="row">
          {classesArray.map((currClass) => (
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