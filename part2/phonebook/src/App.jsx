import { useState } from 'react'


const Name = (props) => {
  console.log(props)
  return (
  <div>{props.name}</div>
)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
  }


  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Name key={person.name} name={person.name}/>)}
    </div>
  )
}

export default App