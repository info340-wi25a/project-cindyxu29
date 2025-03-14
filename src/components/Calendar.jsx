import React from 'react';
import { Link } from 'react-router';


export default function Calendar(props) {
    const classesArr = props.classes;

    return (
        <main className="calendar-background">
            {/* <div className="container mt-4"> */}
            <h1 className="weekly-title">Your Weekly Schedule</h1>

            <div className="calendar-container">
                <div className="calendar">
                    <div className="day"><strong>Sunday</strong></div>
                    <div className="day"><strong>Monday</strong>
                        {/* CARD HERE */}
                        <CalendarCard classes={classesArr[0]} />
                    </div>
                    <div className="day"><strong>Tuesday</strong>
                        <CalendarCard classes={classesArr[1]} />
                    </div>
                    <div className="day"><strong>Wednesday</strong></div>
                    <div className="day"><strong>Thursday</strong>
                        <CalendarCard classes={classesArr[2]} />
                        <CalendarCard classes={classesArr[3]} />
                    </div>
                    <div className="day"><strong>Friday</strong></div>
                    <div className="day"><strong>Saturday</strong></div>
                </div>
            </div>
        </main>
    )
}

function CalendarCard(props) {
    const currClass = props.classes;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Gentle Yoga</h5>
                <p>{currClass.duration} min | @{currClass.location} | {currClass.date} | {currClass.time} | {currClass.notes}</p>
                <Link to={`/my-classes/${currClass.id}/poses`} className="btn btn-dark btn-sm">View</Link>
            </div>
        </div>
    )
}