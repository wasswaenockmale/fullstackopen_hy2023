import { useState } from "react";

const App = ()=> {
  const [persons, setPersons] = useState([{name: "Enock Male"}]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event)=>{
    // First prevent default
    // second check whether the name already exists in the phonebook.
    if(persons.filter(element => element.name === newName).length != 0){
      window.alert(`${newName} is already in the phonebook`);
    }else{
      const newPerson = {
        name: newName,
      }
      const person = [...persons].concat([newPerson]);
      setPersons(person);
    }
    event.preventDefault();
  }

  const handlChange = (event)=>{
    event.preventDefault();
    setNewName(event.target.value);
  }
  return (
    <div>
      <h2>PhoneBook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handlChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(person => <p key={person.name}>{person.name}</p>)
        }
      </div>
    </div>
  );
}

export default App;
