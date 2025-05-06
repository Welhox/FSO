import {useEffect, useState } from 'react'
import countriesApi from './services/countries'



// const DisplayCountry = ({countries, filter}) => {
//   const filtered = countries.filter(country => country === filter)

//   return (
//     <>
//       {filtered.map()}
    
//     </>
//   )
// }

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesApi.getAll()
    .then(apiCountries => {
     setCountries(apiCountries)
     console.log(countries)
    })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    console.log(event.target.value)
  }












  return (
    <div>
      find countries
      <input placeholder='Country name' onChange={handleFilterChange}></input>
      {/* <DisplayCountry countries={countries} filter={filter} /> */}
    </div>
  )
}

export default App