import React, { useState } from "react";
import { Link } from 'react-router';

export default function ClassMain(props) {
  const classesArray = props.classes;
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
        <div className="instruction-container">
          <h3>Plan Your Yoga Classes with Ease</h3>
          <p className="instructions">
            This website is designed to help you easily plan and manage your weekly yoga classes. Start by adding a class you'll be teaching in "My Classes". Make sure to select the day of the week you'll be teaching that class, and you'll be able to view your weekly schedule in the calendar! You can then customize the class by adding the yoga poses you'll carry out in that class.
          </p>
          <p className="instructions">
            Use our yoga poses guide for inspiration and guidance. When the class begins, set the timer to keep your session on track! This tool is here to simplify your preparation, allowing you to focus more on teaching and less on planning. Feel free to update your schedule each week, making adjustments as needed to fit your teaching rhythm and enjoy yoga!
          </p>
      </div>
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
        <p>{currClass.duration} min | @{currClass.location} | {currClass.dayOfWeek} | {currClass.time} | {currClass.notes}</p>
        <Link to={`/my-classes/${currClass.id}/poses`} className="btn btn-dark">View Class</Link>
      </div>
    </div>
  )
}

