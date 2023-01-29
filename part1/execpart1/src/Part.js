const Part = (props)=>{
    console.log(props);
    return(
        <>
            <p>{props.parts.name} {props.parts.exercises}</p>
        </>
    );
}

export default Part;