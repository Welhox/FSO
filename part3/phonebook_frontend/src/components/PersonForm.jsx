
const PersonForm = (props) => {
	return (
	  <form onSubmit={props.addPerson}>
	  <div>
		name: <input 
		value={props.newName}
		onChange={props.handleNameChange}
		placeholder="Name of contact"
		/>
	  </div>
	  <div>
		number: <input 
		value={props.newNumber}
		onChange={props.handleNumberChange}
		placeholder="Phonenumber"
		/>
	  </div>
	  <div><button type="submit">add</button></div>
	</form>
	)
  }

export default PersonForm