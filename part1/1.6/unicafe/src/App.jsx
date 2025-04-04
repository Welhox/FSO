import { useState } from 'react'

//generic button function
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr><td>{props.text}</td><td>{props.value}</td></tr>
)

//statistics made into own component
const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0)
    return (
      <div>
      <p style={{fontSize: '24px', fontWeight: 'bold'}}>statistics</p>
      <div>No feedback given</div>
      </div>
    )
  return (
    <div>
      <p style={{fontSize: '24px', fontWeight: 'bold'}}>statistics</p>
    <table>
      <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={total}/>
        <StatisticLine text='average' value={(good - bad) /total}/>
        <StatisticLine text='positive' value={`${(good / total) * 100} %`}/>
      </tbody>
    </table>
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