import { useState } from "react";

const App = ()=> {
  const [persons, setPersons] = useState([{name: "Enock Male", tel: "0758585390"}]);
  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');

  const handleSubmit = (event)=>{
    // First prevent default
    // second check whether the name already exists in the phonebook.
    if(persons.filter(element => element.name === newName).length != 0){
      window.alert(`${newName} is already in the phonebook`);
    }else{
      const newPerson = {
        name: newName,
        tel: newTel,
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
  return (
    <div>
      <h2>PhoneBook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          number: <input onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(person => <p key={person.name}>{person.name} {person.tel}</p>)
        }
      </div>
    </div>
  );
}

export default App;
