import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const MostVotes = (props) => {
  const index = props.votes.indexOf(Math.max(...props.votes))
  // console.log('index of most votes', index)
  return (
    <div>
      <div>{props.anecdotes[index]}</div>
      <div>has {props.votes[index]} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const randomSelect = () => {
    const tempSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(tempSelected)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <p style={{fontSize: '24px', fontWeight: 'bold'}}>Anecdote of the day</p>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button onClick={randomSelect} text ='next anecdote' />
      <Button onClick={vote} text ='vote' />
      <p style={{fontSize: '24px', fontWeight: 'bold'}}>Anecdote with most votes</p>
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App