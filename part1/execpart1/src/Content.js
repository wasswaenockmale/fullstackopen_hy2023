import Part from "./Part";
const Content = (props)=>{
    // console.log(props);
    return(
        <>
        {props.course.parts.map(value => <Part parts = {value}/>)}
        </>
    );
}

export default Content;