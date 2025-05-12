import {useEffect, useState } from 'react'
import countriesApi from './services/countries'

const Country = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital {country.capital}</div>
      <div>Area {country.area}</div>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([code, name]) =>
          <li key={code}>{name}</li>
        )}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt}/>
      {/* <button onClick={props.onClick}>show</button> */}
    </div>
  )
}

const DisplayCountry = ({countries, filter}) => {
  const filtered = countries.filter(country => 
    country.name.common.toLowerCase().includes(filter.toLowerCase()))
    // console.log(filtered)
  if (filtered.length > 10) {
    return( 
      <div>Too many matches, specify another filter</div>
    )
  }
  else if (filtered.length === 1) {
    return (
    <Country 
    key={0}
    country={filtered[0]}
    />
  )}
  else {
  return (
      <div>
        {filtered.map((country, index) =>
        <div key={index}> {country.name.common} </div>
        )}
      </div>
  )}
}

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