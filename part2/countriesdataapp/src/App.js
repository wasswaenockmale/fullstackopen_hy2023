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

  const [isShow, setIsShow] = useState(false);
  const [id, setId] = useState('')
  const handleClick = (event)=>{
      const id = event.target.id
      setIsShow(!isShow);
      setId(id);
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

  // console.log(countries)
  return (
    <div className="App">
      find countries<input onChange={handleChange}/>

      <Notification 
      countries={countries} 
      handleClick={handleClick} 
      isShow={isShow}
      id={id}
      />
    </div>
  );
}

export default App;
