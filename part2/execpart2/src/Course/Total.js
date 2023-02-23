const Total = ({course})=>{
    let count = 0;
    course.parts.forEach(element => {
        count += element.exercises;
    });
    // console.log(count);
    return(
        <>
            <h4>total of {count} exercises</h4>
        </>
    );
}

export default Total;