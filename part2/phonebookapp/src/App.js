import { useState, useEffect } from "react";
import Person from "./Components/Person";
import PersonForm from "./Components/PersonForm";
import Filter from "./Components/Filter";
import axios from "axios";

const App = ()=> {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');
  const [charSearch, setCharSearch] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data);
    });
  },[]);
  const handleSubmit = (event)=>{
    // First prevent default
    // second check whether the name already exists in the phonebook.
    if(persons.filter(element => element.name === newName).length !== 0){
      window.alert(`${newName} is already in the phonebook`);
    }else{
      const newPerson = {
        name: newName,
        number: newTel,
        id: persons.length + 1
      }
      const person = [...persons].concat([newPerson]);
      setPersons(person);
    }
    event.preventDefault();
  }

  const handleNameChange = (event)=>{
    event.preventDefault();
    setNewName(event.target.value);
  }

  const handleNumberChange = (event)=>{
    event.preventDefault();
    setNewTel(event.target.value);
  }

  const handleSearch = (event)=>{
    event.preventDefault();
    setCharSearch(event.target.value);
  }

  
  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter charSearch={charSearch} persons={persons} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit}/>
      <h2>Numbers</h2>
      <Person persons={persons}/>
    </div>
  );
}

export default App;
