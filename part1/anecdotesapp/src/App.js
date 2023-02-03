import { useState } from "react";

function AnecdoteOfTheDay(props){
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[props.information.selected]}</p>
      <p>has {props.information.voted[props.information.selected]} votes</p>
      <button onClick={props.information.vote}>vote</button>
      <button onClick={props.information.nextAnecdote}>next anecdote</button>
    </>
  );
}

function WithMostVotes(props){
  if(Math.max(...props.information.voted)===0){
    return(
      <div>
        <h1>Anecdote with most votes</h1>
        <p>non has been voted.</p>
      </div>
    );
  }else{
    return(
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{props.mostVotes()}</p>
        <p>has {Math.max(...props.information.voted)} votes</p>
      </div>
    );
  }
}

function App() {

  const anecdotes= [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  const [selected, setSelected] = useState(3);
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0));
  const information = {
    selected: selected,
    voted: voted,
    nextAnecdote: ()=>{
      setSelected(Math.floor(Math.random() * (anecdotes.length - 1)));
    },
    vote: ()=>{
      const copy = [...voted];
      copy[selected] += 1;
      setVoted(copy);
    }
  
  };

  const mostVotes = ()=>{
    return anecdotes[information.voted.indexOf(Math.max(...voted))];
  }

  return (
    <div>
      <AnecdoteOfTheDay information = {information} anecdotes = {anecdotes}/>
      <WithMostVotes mostVotes = {mostVotes} information={information}/>
    </div>
  );
}

export default App;
