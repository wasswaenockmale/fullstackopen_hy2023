

const Person = (props)=>{
    return(
      <div>
          {
            props.persons.map((person,index) => 
                <div key={person.id}>
                  {person.name} {person.number}
                    <button id={person.id} onClick={props.handleDelete}>delete</button>
                </div>
              )
          }
      </div>
    )
  }

  export default Person;