import { useState } from "react";
import WeatherApi from "../services/WeatherApi";

const Weather = ({country}) => {

    const [weather, setWeather] = useState([]);
    WeatherApi(country).then(response => {
        setWeather(response);
    }).catch(error => console.log("This error just occured now", error));

    console.log(weather);
    return(
        <div>
            <h3>Weather in {country.capital}</h3>
            <div>
                {/* <p>{weather[0].weather}</p> */}
            </div>
        </div>
    )
}

export default Weather;