import React, { useState, useEffect } from 'react'

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
	  </div>
	)
  }

const DisplayCountry = ({countries, filter}) => {
  const [showCountry, setShowCountry] = useState('')

  useEffect(() => {
	setShowCountry('')
  }, [filter])

  const handleShow = (country) => {
	setShowCountry(country)
  }

  const filtered = countries.filter(country => 
	country.name.common.toLowerCase().includes(filter.toLowerCase()))

  if (showCountry) {
	return (
	  <Country 
	  key={0}
	  country={showCountry}
	  />
	)
  }

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
		<div key={index}> {country.name.common}
		  <button onClick={() => handleShow(country)}>Show</button>
		</div>
		)}
	  </div>
  )}
}

export default DisplayCountry