import { useState } from "react";
import WeatherApi from "../services/WeatherApi";

const Weather = ({country}) => {

    const [weather, setWeather] = useState([]);
    if(country && country?.capital){
        WeatherApi(country).then(response => {
            setWeather(response);
        }).catch(error => console.log("This error just occured now", error));
    }
    console.log(weather);
    return(
        <div>
            <h3>Weather in {country.capital}</h3>
            <div>
                
            </div>
        </div>
    )
}

export default Weather;