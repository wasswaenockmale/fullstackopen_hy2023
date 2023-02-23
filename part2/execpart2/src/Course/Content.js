import Part from "./Part";
const Content = (props)=>{
    return(
        <>
        {props.course.parts.map((value, index) => <Part parts = {value} ind={index}/>)}
        </>
    );
}

export default Content;