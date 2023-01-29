import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
const App = () => {
  const course = 'Half Stack application development';

  
  const part1 = {
    name:'Fundamentals of React',
    exercises:10
  };
  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name:'State of a component',
    exercises:14

  };
  const exercises = [part1.exercises, part2.exercises, part3.exercises];
  

  return (
    <div>
      <Header course = {course}/>
      <Content />
      <Total exercises = {exercises}/>
    </div>
  );
}

export default App;
