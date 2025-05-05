import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

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
  const [infoMessage, setInfoMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const filtered = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  const handleFilterChange = (event) => (
    setNewFilter(event.target.value)
  )

  const handleNameChange = (event) => (
    setNewName(event.target.value)
  )

  const handleInfoMessage = (message) => {
    setInfoMessage(`${message}`)
    setTimeout(() => {
      setInfoMessage(null)
    }, 3000)
  }

  const handleErrorMessage = (message) => {
    setErrorMessage(`${message}`)
    setTimeout(() => {
      setErrorMessage(null)
    }, 4000)
  }

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
        const confirmed = window.confirm(`${newName} is already in added to the phonebook, replace old number with a new one?`)
        if (confirmed)
        {
          const oldPerson = persons.find(n => n.name === newName)
          const updatedPerson = { ...oldPerson, number: newNumber}
          personService
          .update(updatedPerson, updatedPerson.id)
          .then (returnedPerson => {
            setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person ))
            setNewName('')
            setNewNumber('')
            handleInfoMessage(`${returnedPerson.name} modified`)
          })
          .catch(error => {
            handleErrorMessage(`Information of ${oldPerson.name} has already been deleted`)
          })
        }
        return;
      }
      personService
      .create(personObject)
      .then(returnedPerson=> {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      handleInfoMessage(`Added ${returnedPerson.name}`)
      })
      .catch(error => {
        handleErrorMessage(`Unable to add ${personObject.name} to the phonebook`)
      })
    }
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
        handleInfoMessage(`${returnedPerson.name} Deleted`)
        }
      })
      .catch(error => {
        handleErrorMessage(`${person.name} already removed from the phonebook`)
      })
    }
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={infoMessage} />
      <ErrorMessage message={errorMessage} />
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