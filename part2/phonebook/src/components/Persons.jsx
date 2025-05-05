
const Name = (props) => {
  return (
  <div className='contact'>
    {props.name} 
    {props.number}
    <>     </>
    <button onClick={props.removePerson}>{props.label}</button>
    </div>
)
}

const Persons = ({filtered, label, removePerson}) => {
  return (
    <>
    {filtered.map(person =>
      <Name 
      key={person.id} 
      name={person.name} 
      number={person.number}
      label={label}
      removePerson={() => removePerson(person.id)}
      />)}
    </>
  )
}

export default Persons