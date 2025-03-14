import React from 'react';
import { Link } from 'react-router';

export default function Calendar(props) {
    const classesArr = props.classes;

    const daysMap = {
        "Sunday": [],
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": []
    };

    // Sort classes into correct days
    classesArr.map(currClass => {
        const classDate = new Date(currClass.date);
        const dayName = classDate.toLocaleDateString('en-US', { weekday: 'long' });
        daysMap[dayName].push(currClass);
    });

    return (
        <main className="calendar-background">
            <h1 className="weekly-title">Your Weekly Schedule</h1>

            <div className="calendar-container">
                <div className="calendar">
                    {Object.keys(daysMap).map(day => (
                        <div className="day" key={day}>
                            <strong>{day}</strong>
                            {daysMap[day].map((currClass, index) => (
                                <CalendarCard key={index} currClass={currClass} />
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
                <p className='calendar-card-content'>{currClass.duration} min | @{currClass.location} | {currClass.date} | {currClass.time} | {currClass.notes}</p>
                <Link to={`/my-classes/${currClass.id}/poses`} className="btn btn-dark btn-sm">View</Link>
            </div>
        </div>
    );
}