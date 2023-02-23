import Part from "./Part";
const Content = (props)=>{
    return(
        <>
        {props.course.parts.map((value) => <Part parts = {value} key={value.id}/>)}
        </>
    );
}

export default Content;