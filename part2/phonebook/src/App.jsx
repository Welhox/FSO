import { useState } from 'react'


const Name = (props) => {
  return (
  <div>{props.name} {props.number}</div>
)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'1234567', id: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const handleNameChange = (event) => (
    setNewName(event.target.value)
  )

  const handleNumberChange = (event) => (
    setNewNumber(event.target.value)
  )

  const addPerson = (event) => {
    event.preventDefault()
    if (newName && newNumber)
    {
      const personObject = {
        name: newName,
        id: newName,
        number: newNumber
      }
      if (persons.some(person => person.name === newName))
      {
        alert(`${newName} is already added to phonebook`)
        return;
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
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
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Name key={person.id} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App