import React from "react";

export default function Timer() {
    return (
        <div className="container">
          <div className="timer-container">
            <div className="timer">
              <h1 id="timerDisplay">00:00</h1>
              <input type="number" id="minutesInput" placeholder="Minutes" />
              <button id="startButton">Start Timer</button>
              <button id="resetButton">Reset</button>
            </div>
          </div>
        </div>
    )
}