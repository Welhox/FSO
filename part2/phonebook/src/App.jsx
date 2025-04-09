import { useState } from 'react'


const Name = (props) => {
  return (
  <div>{props.name}</div>
)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => (
    setNewName(event.target.value)
  )

  const addPerson = (event) => {
    event.preventDefault()
    if (newName)
    {
      const nameObject = {
        name: newName,
        id: newName
      }
      if (persons.some(person => person.name === newName))
      {
        alert(`${newName} is already added to phonebook`)
        return;
      }
        setPersons(persons.concat(nameObject))
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Name key={person.name} name={person.name}/>)}
    </div>
  )
}

export default App