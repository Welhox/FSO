import { useState } from 'react'


const Name = (props) => {
  return (
  <div>{props.name} {props.number}</div>
)
}



// const Filter = (props) => {
//   return (
//     <div>
//     filter shown with
//     <input
//       value={newFilter}
//       onChange={handleFilterChange}
//     />
//     </div>
//   )
// }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const filtered = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  const handleFilterChange = (event) => (
    setNewFilter(event.target.value)
  )
  

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
        id: String(persons.length + 1),
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
      filter shown with
      <input
        value={newFilter}
        onChange={handleFilterChange}
      />
      <h2>add a new</h2>
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
      {filtered.map(person =>
        <Name key={person.id} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App