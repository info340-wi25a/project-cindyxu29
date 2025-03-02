import React from 'react';


export default function Calendar(props) {
    return (
        <main className="calendar-background">
        <div className="container mt-4">
            <h1 className="text-center mb-4">Weekly Yoga Schedule</h1>
            <div className="calendar">
                <div className="day"><strong>Sunday</strong></div>
                <div className="day"><strong>Monday</strong>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Gentle Yoga</h5>
                            <p>30 min | @UW HUB | 03/10/2025 | 2:00 pm | Beginning lesson for UW students</p>
                            <a href="index2.html" className="btn btn-dark btn-sm">View</a>
                        </div>
                    </div>
                </div>
                <div className="day"><strong>Tuesday</strong>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Flow Yoga</h5>
                            <p>60 min | @IMA | 03/11/2025 | 3:30 pm | Weekly lesson for Yoga Beginner
                                (not-limited to students)</p>
                            <a href="index2.html" className="btn btn-dark btn-sm">View</a>
                        </div>
                    </div>
                </div>
                <div className="day"><strong>Wednesday</strong></div>
                <div className="day"><strong>Thursday</strong>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Restorative Yoga</h5>
                            <p>75 min | @IMA | 03/13/2025 | 10:00 am | One-to-one className</p>
                            <a href="index2.html" className="btn btn-dark btn-sm">View</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Restorative Yoga</h5>
                            <p>75 min | @Yoga Studio | 03/13/2025 | 2:00 pm | Intermediate level</p>
                            <a href="index2.html" className="btn btn-dark btn-sm">View</a>
                        </div>
                    </div>
                </div>
                <div className="day"><strong>Friday</strong></div>
                <div className="day"><strong>Saturday</strong></div>
            </div>
        </div>
    </main>
    )
}