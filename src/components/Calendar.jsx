import React from 'react';
import { Link } from 'react-router';

export default function Calendar(props) {
    const classesArr = props.classes || [];
    console.log("Classes Array:", classesArr);

    const daysMap = {
        "Sunday": [],
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": []
    };

    // Sort classes into correct days based on dayOfWeek
    classesArr.forEach(currClass => {
        const dayName = currClass.dayOfWeek;
        if (daysMap[dayName]) {
            daysMap[dayName].push(currClass);
        }
    });

    // Sort classes by time within each day
    Object.keys(daysMap).forEach(day => {
        daysMap[day].sort((a, b) => {
          const timeA = a.time.split(':').map(Number);
          const timeB = b.time.split(':').map(Number);
          return timeA[0] - timeB[0] || timeA[1] - timeB[1];
        });
      });


    return (
        <main className="calendar-background">
            <h1 className="weekly-title">Your Weekly Schedule</h1>

            <div className="calendar-container">
                <div className="calendar">
                    {Object.keys(daysMap).map(day => (
                        <div className="day" key={day}>
                            <strong>{day}</strong>
                            {daysMap[day].map((currClass) => (
                                <CalendarCard key={currClass.uid} currClass={currClass} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

function CalendarCard({ currClass }) {
    return (
        <div className="card">
            <div className="card-body">
                <p className="calendar-card-title">{currClass.title}</p>
                <p className='calendar-card-content'>{currClass.duration} min | @{currClass.location} | {currClass.dayOfWeek} | {currClass.time} | {currClass.notes}</p>
                <Link to={`/my-classes/${currClass.id}/poses`} className="btn btn-dark btn-sm">View</Link>
            </div>
        </div>
    );
}