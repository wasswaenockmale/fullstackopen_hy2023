const Total = (props)=>{
    return(
        <>
            <p>Number of exercises {props.exercises.reduce((pre,curr)=>pre+curr,0)}</p>
        </>
    );
}

export default Total;