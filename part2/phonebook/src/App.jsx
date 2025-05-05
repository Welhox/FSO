import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    personService.getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])
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
        number: newNumber
      }
      if (persons.some(person => person.name === newName))
      {
        alert(`${newName} is already added to phonebook`)
        return;
      }
      personService
      .create(personObject)
      .then(returnedPerson=> {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })}
  }

  const removePerson = (id) => {
    const person = persons.find(n => n.id === id)
    const confirmed = window.confirm(`Delete ${person.name} ?`)
    if (confirmed)
    {      
      personService
      .remove(id)
      .then(returnedPerson => {
        if (returnedPerson.id === person.id){
        setPersons(persons.filter(n => n.id !== person.id))
        }
      })
      .catch(error => {
        alert(
          `${person} already removed from server`
        )
      })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons 
      filtered={filtered}
      label={"delete"}
      removePerson={removePerson}
      />
    </div>
  )
}

export default App