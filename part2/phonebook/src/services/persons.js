import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const create = (newObject) => {
	const request = axios.post(baseUrl, newObject)
	return request.then(response => response.data)
}

const remove = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then(response => response.data)
} 

const update = (newObject, id) => {
	const request = axios.put(`${baseUrl}/${id}`, newObject)
	return request.then(response => response.data)
	// .catch(error => {
	// 	console.log('fail')
	// })
}

export default {getAll, create, remove, update}