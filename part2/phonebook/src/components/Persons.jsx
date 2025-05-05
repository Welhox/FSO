
const Name = (props) => {
  return (
  <div>{props.name} {props.number}</div>
)
}

const Persons = ({filtered}) => {
  return (
    <>
    {filtered.map(person =>
      <Name key={person.id} name={person.name} number={person.number}/>)}
    </>
  )
}

export default Persons