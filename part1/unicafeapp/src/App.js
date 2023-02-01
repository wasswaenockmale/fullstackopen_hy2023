import { useState } from "react";
import Button from "./Button";
import './App.css';

// This is the statistics component 
const Statistics = (props) => {
  if(props.statistics.feedback.reduce((prev, curr) => prev + curr,0) === 0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }else{
    return(
      <div>
          <h1>statistics</h1>
          <p>good {props.statistics.feedback[0]}</p>
          <p>neutral {props.statistics.feedback[1]}</p>
          <p>bad {props.statistics.feedback[2]}</p>
          <p>all {props.statistics.feedback.reduce((prev, curr)=>prev + curr,0)}</p>
          <p>average {props.statistics.average}</p>
          <p>positive {props.statistics.percent}%</p>
      </div>
  );
  }
}


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = ()=> setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = ((good * 1) + (neutral * 0) + (bad * -1))/total;
  const percent = (good/total) * 100;

  const statistics = {
    feedback:[good, neutral, bad],
    average: average,
    percent: percent
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div className="buttons">
        <Button handleClick={handleGood} text="good"/> 
        <Button handleClick={handleNeutral} text="neutral"/>
        <Button handleClick={handleBad} text="bad"/>
      </div>
      <Statistics statistics={statistics} />
    </div>
  );
}

export default App;