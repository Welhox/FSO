import { useState } from 'react'

//generic button function
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

//statistics made into own component
const Statistics = ({good, neutral, bad, total}) => {
  return (
  <div>
    <p style={{fontSize: '24px', fontWeight: 'bold'}}>statistics</p>
    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    <div>all {total}</div>
    <div>average {(good - bad) /total}</div>
    <div>positive {(good / total) * 100} %</div>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  // handles the clicks
  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total +1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total +1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total +1)
  }

  return (
    <div>
      <p style={{fontSize: '24px', fontWeight: 'bold'}}>give feedback</p>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App