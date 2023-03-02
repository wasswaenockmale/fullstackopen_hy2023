import { useState, useEffect } from "react";
import Person from "./Components/Person";
import PersonForm from "./Components/PersonForm";
import Filter from "./Components/Filter";
import axios from "axios";
import savePerson from "./Service/savePerson";
import Notification from "./Components/Notification";

const App = ()=> {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');
  const [charSearch, setCharSearch] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data);
    });
  },[]);

  const handleDelete = event => {
    if(window.confirm("Do really want to delete this number")){
      const id = event.target.id;
      savePerson.deleteNumber(id)
      .then(response => {
        const newPersons = [...persons].filter(person => person.id !== id)
        
      })
    }
  }

  const handleSubmit = (event)=>{
    // First prevent default 
    // second check whether the name already exists in the phonebook.
    // Then make sure that the information is saved to the server.
    if(persons.filter(element => element.name === newName).length !== 0){
      // Now if the number exists in the server
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        // now get the id of the person, whose number you want to check.
        const person = persons.find(element => element.name === newName);
        const changedNumber = {...person, number: newTel};
        
        savePerson.updateNumber(person.id,changedNumber)
        .then(response => {
          setPersons(persons.map(person => person.name !== newName ? person: response));
        })
        setMessage(`${person.name}'s has been changed`);
      }
    }else{
      const newPerson = {
        name: newName,
        number: newTel,
        id: persons.length + 1
      }

      savePerson.saveNumber(newPerson)
      .then(response => {
        setPersons([...persons].concat(response));
      });
      setMessage(`Added ${newPerson.name}`);
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
      <Notification message={message} />
      <Filter 
      charSearch={charSearch} 
      persons={persons} 
      handleSearch={handleSearch} 
      />
      <h2>add a new</h2>
      <PersonForm 
      handleNameChange={handleNameChange} 
      handleNumberChange={handleNumberChange}
      handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Person 
      persons={persons}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
