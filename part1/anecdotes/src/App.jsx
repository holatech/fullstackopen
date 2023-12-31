import { useState } from 'react'

const Button = ({onClick, text}) => {

  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  
  // generate an array of zeros to initialize votes for each anecdote
  const generatedArray = new Array(anecdotes.length+1).join('0').split('').map(parseFloat)
 
  //save each vote
  const [votes, setVotes] = useState(generatedArray)
  const highestVotes = Math.max(...votes)

  const handleNextAnecdoteClick = () => {
    const randomNumber = Math.floor(Math.random()*anecdotes.length)
    setSelected(randomNumber)
  }

  const handleVoteClick = () => {
    // copy vote array into points
    const points = [...votes]

    // increase the number of votes for selected anecdote by 1
    points[selected] += 1
    
    // set vote array with the updated list of each anecdote vote
    setVotes(points)

  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
     
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVoteClick} text='vote' />
      <Button onClick={handleNextAnecdoteClick} text='next anecdote' />
      
      <h2>Anecdote with most votes</h2>

      {highestVotes == 0
      ? <p>No votes recorded yet</p>
      :
        <> 
          <p>{anecdotes[votes.indexOf(highestVotes)]}</p>
          <p>has {votes[votes.indexOf(highestVotes)]} votes</p>
        </>
      }

    </div>
  )
}

export default App