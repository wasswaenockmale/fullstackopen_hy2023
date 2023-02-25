import { useState } from "react";

const App = ()=> {
  const [persons, setPersons] = useState([
    {name: "Enock Male", number: "0758585390", id: 0},
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');
  const [charSearch, setCharSearch] = useState('');



  const handleSubmit = (event)=>{
    // First prevent default
    // second check whether the name already exists in the phonebook.
    if(persons.filter(element => element.name === newName).length !== 0){
      window.alert(`${newName} is already in the phonebook`);
    }else{
      const newPerson = {
        name: newName,
        number: newTel,
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

  const searchedPerson = persons.filter(element => element.name.includes(charSearch));
  return (
    <div>
      <h2>PhoneBook</h2>
      <div>
        filter shown with <input onChange={handleSearch}/>
      </div>
      <h2>add a new</h2>
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
          searchedPerson.map(person => <p key={person.name}>{person.name} {person.number}</p>)
        }
      </div>
    </div>
  );
}

export default App;
