import { useState } from "react";

const App = ()=> {
  const [persons, setPersons] = useState([{name: "Enock Male"}]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event)=>{
    event.preventDefault();
    const newPerson = {
      name: newName,
    }
    const person = [...persons].concat([newPerson]);
    setPersons(person);
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
