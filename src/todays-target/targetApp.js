import React, {useState} from 'react';
import './targetApp.css';

function TargetApp() {
  const [todayGoal, setTodayGoal] = useState(0);

  function handleGoalChange() {
    setTodayGoal(document.getElementById("goal").value);
  }


  return (
    <div className="target-container">
      <h1 className="target-title">Today's Word Count Goal</h1>
      <p>Goal today:</p>
      <input type="number" id="goal" defaultValue="0" onChange={handleGoalChange}></input><button onClick={handleGoalChange}>Let's go!</button>
      <h5>My goal: {todayGoal}</h5>
    </div>
  )
}


export default TargetApp;