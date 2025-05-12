import {useEffect, useState } from 'react'
import countriesApi from './services/countries'
import DisplayCountry from './components/DisplayCountry'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesApi.getAll()
    .then(apiCountries => {
     setCountries(apiCountries)
    })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    // console.log(event.target.value)
  }

  return (
    <div>
      find countries
      <input placeholder='Country name' onChange={handleFilterChange}></input>
      <DisplayCountry countries={countries} filter={filter} />
    </div>
  )
}

export default App