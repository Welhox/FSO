import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const api_key = import.meta.env.VITE_WEATHER_KEY


const getCity = (country) => {
const request = axios.get(`${baseUrl}?q=${country.capital},${country.cca2}&appid=${api_key}&units=metric`)
	return request.then(response => response.data)
}

export default {getCity}