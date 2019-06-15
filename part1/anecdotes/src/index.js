import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const BiggestVote = (props)  => {
    let votes = props.votes
    let biggest = votes[0]
    let count
    
    for(let number in votes){
        if(biggest <= votes[number]){
            biggest = votes[number]
            count = number
        }
    }
    console.log(biggest)
    return(
        <p>{props.anecdotes[count]}</p>
    )  
}

const Button = (props) => {
    let randnum
    do{
    randnum = Math.floor(Math.random() * 6);
    }
    while (props.selected === randnum)
    return(
        <button onClick={() => props.setSelected(randnum)}> next anecdote </button>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
      {
          0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0
      }
  )
  const copy = { ...votes }

  const addVote = ()  => {
    copy[selected] += 1
    setVotes({...copy})
  }
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={addVote} >vote</button>
      <Button setSelected={setSelected} selected={selected}/>
      <h2>Anecdote with most votes</h2>
      <BiggestVote votes={votes} anecdotes={props.anecdotes} />
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)