import { useState, useEffect } from "react";
import axios from "axios";
import Notification from "./components/Nitification";


const App = ()=> {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);

  const handleChange = (event) =>{
    event.preventDefault();
    setValue(event.target.value);
  }

  useEffect(()=>{
    // Whenever the value changes, show more countries.
    axios.get(`https://restcountries.com/v2/all`)
    .then(response => {
      console.log(response.data);
      setCountries(response.data.filter(element => element.name.includes(value)))
    })
    .catch(error => {
      console.log("This is an error here",error);
    });
  }, [value]);
  
  return (
    <div className="App">
      find countries<input onChange={handleChange}/>

      <Notification 
      countries={countries} 
      />
    </div>
  );
}

export default App;
