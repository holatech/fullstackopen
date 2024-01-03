import { useState } from 'react'

const StatisticLine = (props) => {

  return (
    <>
      {
        props.text == "positive"
        ? <tr> 
            <td> {props.text} </td> 
            <td> {props.value} %</td>
          </tr>
        : <tr> 
            <td> {props.text} </td> 
            <td> {props.value} </td>
          </tr>
      }
    </>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = props.all
  const average = props.average
  const positive = props.positive

  return(
    <>
      <tbody >
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={positive} />
      </tbody>
    </>
  )
}

const Button = ({onClick, text}) => {

  return (
    <>
      <button onClick = {onClick}> {text} </button>
    </>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)

    const updatedAll = updatedGood + neutral + bad
    setAll(updatedAll)

    const calculatedAverage = (updatedGood - bad)/updatedAll
    setAverage(calculatedAverage)

    const calculatedPositive = (updatedGood/updatedAll)*100
    setPositive(calculatedPositive)

  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    
    const updatedAll = good + updatedNeutral + bad
    setAll(updatedAll)
    
    const calculatedAverage =  (good - bad)/updatedAll
    setAverage(calculatedAverage)
    
    const calculatedPositive = (good/updatedAll)*100
    setPositive(calculatedPositive)

  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)

    const updatedAll = good + neutral + updatedBad
    setAll(updatedAll)

    const calculatedAverage = (good - updatedBad)/updatedAll
    setAverage(calculatedAverage)

    const calculatedPositive = (good/updatedAll)*100
    setPositive(calculatedPositive)
  }
  
  return (
    <div>
      <h2>give feedback</h2>

      <Button onClick={handleGoodClick} text = 'good' />
      <Button onClick={handleNeutralClick} text = 'neutral' />
      <Button onClick={handleBadClick} text = 'bad' />
      
      <h2>statistics</h2>
      
      {all==0
        ? <p>No feedback given</p>
        : <table>
            <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} average = {average} positive = {positive} />
          </table>
      }

    </div>
  )
}

export default App