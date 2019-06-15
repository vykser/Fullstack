import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return(
    <div>
  <button onClick={()=> props.setGood(props.good + 1)}>
    good
  </button>
  <button onClick={()=> props.setNeutral(props.neutral + 1)}>
  neutral
</button>
<button onClick={()=> props.setBad(props.bad + 1)}>
    bad
  </button>
  </div>
  )
}

const Statistic = ({text, value}) => {
  return(
    <>
    <td>{text}</td>
    <td>{value}</td>
    </>
  )
  }

const Statistics = (props) => {
  if(props.good + props.neutral + props.bad === 0){
    return (
    <div>
      No feedback given
    </div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
        <tr>
      <Statistic text="good" value ={props.good} />
        </tr>
        <tr>
      <Statistic text="neutral" value={props.neutral} />
      </tr>
      <tr>
      <Statistic text="bad" value={props.bad} />
      </tr>
      <tr>
      <Statistic text="all" value={props.good + props.neutral + props.bad} />
      </tr>
      <tr>
      <Statistic text="average" value={(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
      </tr>
      <tr>
      <Statistic text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + " %"} />
      </tr>
      </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
        <Button setGood = {setGood} good = {good} setNeutral = {setNeutral} neutral = {neutral} setBad = {setBad} bad = {bad}/>
      <h2>statistics</h2>
        <Statistics good = {good} neutral = {neutral} bad ={bad}  />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)