import Part from "./Part";
const Content = (props)=>{
    return(
        <>
        {props.course.parts.map((value, index) => <Part parts = {value} key={index}/>)}
        </>
    );
}

export default Content;