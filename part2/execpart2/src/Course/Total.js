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

export default Total;