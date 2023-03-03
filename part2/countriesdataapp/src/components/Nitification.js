import ShowBtn from "./Show";

const Notification = ({countries, value, isShow, handleClick, id}) =>{

    if(countries.length <= 10){
        if(countries.length === 1){
            return (
                <div>
                    <h1>{countries[0].name}</h1>
                    <div>{countries[0].capital}</div>
                    <div>{countries[0].area}</div>
                    <h3>Languages</h3>
                    <ul>
                        {countries[0].languages.map((lang,index) => 
                            <li key={index}>{lang.name}</li>
                        )}
                    </ul>
                    <img src={countries[0].flag} alt="Country flag"/>
                </div>
            )
        }else if(countries.length === 0){
            return null;
        }else{
            return (
                <div>
                    {countries.map(country => {
                        return(
                            <div key={country.name}>
                                {country.name}
                                <button onClick={handleClick} id={country.name}>
                                    {!isShow ? "show" : "hide"}
                                </button>
                            </div>
                        )
                    }
                    )}
                    <ShowBtn countries={countries} isShow={isShow} id={id}/> 
                </div>
            )
        }
    }else{
        if(value === ''){
            return null
        }else{
            return(
                <div>
                    To many matches, specify another filter
                </div>
            )
        }
    }
}

export default Notification;