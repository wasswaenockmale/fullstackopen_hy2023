import axios from "axios"

 function WeatherApi (country){
    console.log(country.capital);
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}`).then(response => response.data)

 }
export default WeatherApi;