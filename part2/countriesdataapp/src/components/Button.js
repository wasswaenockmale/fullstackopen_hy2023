import { useState } from "react";
import ShowBtn from "./Show";

const ButtonShow = ({countries, id})=>{
    const [isShow, setIsShow] = useState(false)
    // const [id, setId] = useState('');

    const handleClick = (event)=>{
        // const id = event.target.id
        setIsShow(!isShow);
        // setId(id);
    }

    return(
        <div>
        <button onClick={handleClick}>
            {!isShow ? "show": "hide"}
        </button>
        <ShowBtn countries={countries} isShow={isShow} id={id}/>
        </div>
    )
}

export default ButtonShow;