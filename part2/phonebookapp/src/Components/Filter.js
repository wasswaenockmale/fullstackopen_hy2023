const Filter = (props)=>{
    if(props.charSearch !== ''){
        return(
            <div>
                filter shown with <input onChange={props.handleSearch}/>
                {
                    props.persons.filter(element => element.name.includes(props.charSearch)).map(value =>
                        <div key={value.id}>
                            {value.name} {value.number} 
                            <button>delete</button>
                        </div>
                        )
                }
              </div>
          )
    }else{
        return(
            <div>
                filter shown with <input onChange={props.handleSearch}/>
            </div>
        )
    }
  }

export default Filter;