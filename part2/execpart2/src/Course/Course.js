const Part = (props)=>{
  return(
      <>
          <p>{props.parts.name} {props.parts.exercises}</p>
      </>
  );
}

const Content = (props)=>{
    return(
        <>
        {props.course.parts.map((value) => <Part parts = {value} key= {value.id}/>)}
        </>
    );
}
const Header = ({course})=>{
  return(
      <>
          <h1>{course.name}</h1>
      </>
  );
}

const Total = ({course:{_,parts}})=>{
  // const total = parts.reduce((prev, current)=>{
  //     return prev + current.exercises;
  // },0);
  return(
      <>
          <h4>total of {parts.reduce((acc, current)=>{return acc + current.exercises},0)} exercises</h4>
      </>
  );
}

const Course = ({course})=>{
      return (
        <div>
          {course.map(c => {
            return(
            <div key={c.id}>
              <Header course = {c}/>
              <Content course = {c}/>
              <Total course = {c}/>
            </div>
            );
          })}
        </div>
      );
}

export default Course;