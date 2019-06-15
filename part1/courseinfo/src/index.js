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
        <Part part={prompt.parts[0].name} exercise={prompt.parts[0].exercises}/>
        <Part part={prompt.parts[1]["name"]} exercise={prompt.parts[1]["exercises"]}/>
        <Part part={prompt.parts[2]["name"]} exercise={prompt.parts[2]["exercises"]}/>
    </div>
    )
}
const Total = (prompt) => {
    return(
        <div>
            <p>number of exercises {prompt.parts[0].exercises + prompt.parts[1].exercises + prompt.parts[2].exercises}</p>
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
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

    return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


