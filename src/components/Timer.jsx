import React, { useState, useEffect} from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if(isRunning && timeLeft > 0){
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0){
      setIsRunning(false);
    }9
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    const inputMinutes = document.getElementById("minutesInput").value;
    if(inputMinutes > 0 && !isRunning){
      setTimeLeft(inputMinutes * 60);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    document.getElementById("minutesInput").value = "";
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
  };

    return (
        <div className="container">
          <div className="timer-container">
            <div className="timer">
              <h1 id="timerDisplay">{formatTime(timeLeft)}</h1>
              <input type="number" id="minutesInput" placeholder="Minutes" disabled={isRunning} />
              <button id="startButton" onClick={handleStart} disabled={isRunning}>Start Timer</button>
              <button id="resetButton" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
    )
}