import React from 'react';
import ReactDOM from 'react-dom';

const Header = (prompt) => {
    return (
    <div>
        <h1>{prompt.course}</h1>
    </div>
    )
}
const Content = (prompt) => {
    return (
    <div>
        <Part part={prompt.part1} exercise={prompt.exercise1}/>
        <Part part={prompt.part2} exercise={prompt.exercise2}/>
        <Part part={prompt.part3} exercise={prompt.exercise3}/>
    </div>
    )
}
const Total = (prompt) => {
    return(
        <div>
            <p>number of exercises {prompt.total}</p>
        </div>
    )
}
const Part = (prompt) => {
    return(
        <div>
            <p>{prompt.part} {prompt.exercise}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

    return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercise1={part1.exercises} part2={part2.name} exercise2={part2.exercises} part3={part3.name} exercise3={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


