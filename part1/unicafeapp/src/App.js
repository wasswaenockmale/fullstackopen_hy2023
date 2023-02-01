import { useState } from "react";
import Button from "./Button";
import './App.css';

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

  return (
    <div>
      <h1>give feedback</h1>
      <div className="buttons">
        <Button handleClick={handleGood} text="good"/> 
        <Button handleClick={handleNeutral} text="neutral"/>
        <Button handleClick={handleBad} text="bad"/>
      </div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {percent}%</p>
    </div>
  );
}

export default App;