const Total = (props)=>{
    console.log(props.course.parts)
    return(
        <>
            {/* I have just done it the hard way  */}
            <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
        </>
    );
}

export default Total;