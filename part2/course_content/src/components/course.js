import React from 'react';

const Header = (prompt) => {
  return (
  <div>
      <h1>{prompt.name}</h1>
  </div>
  )
}
const Content = (prompt) => {
  return (
  <div>
      <Part name={prompt.content} />
      <Total total={prompt.content} />
  </div>
  )
}
const Total = ({ total }) => {
  let count = total.reduce((sum, total) =>
      sum + total.exercises
  , 0)

  return(
      <div>
          <p><b>total of {count} exercises</b></p>
      </div>
  )
}
const Part = ({name}) => {

  const rows = () =>
  name.map(name => <p key={name.id}>{name.name} {name.exercises}</p>)

  return(
      <div>
          
          {rows()}
          
      </div>

  )
}

const Course = (prompt) => {
    
  return(
  <>
  <Header name = {prompt.course[0].name} />
  <Content content = {prompt.course[0].parts} />
  <Header name = {prompt.course[1].name} />
  <Content content = {prompt.course[1].parts} />
  </>
  )
}

export default Course

