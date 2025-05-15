const express = require('express')
const app = express()
var morgan = require('morgan')

app.use(express.json())
app.use(morgan('tiny'))

let persons = [
    { 
      id: "1",
      name: "Arto Hellas", 
      number: "040-123456"
    },
    { 
      id: "2",
      name: "Ada Lovelace", 
      number: "39-44-5323523"
    },
    { 
      id: "3",
      name: "Dan Abramov", 
      number: "12-43-234345"
    },
    { 
      id: "4",
      name: "Mary Poppendieck", 
      number: "39-23-6423122"
    }
]


app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Missing information'
    })
  }
  dupe = persons.find(person => person.name === body.name)
  if (dupe){
    return response.status(409).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: String(Math.floor(Math.random() * 9999999))
  }
  persons = persons.concat(person)

  response.json(person)
})

app.get('/api/persons', (request, response) => {
	response.json(persons)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.get('/api/persons/:id', (request, response) => {
	const id = request.params.id
	const person = persons.find(person => person.id === id)
	if (person) {
		response.json(person)
	} else {
		response.status(404).send()
	}
})

app.get('/info', (request, response) => {
	const now = new Date();
	response.send(
		`Phonebook has info for ${contacts.length} people 
		<br><br/>
		${now.toString()}`
	)
})



const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})