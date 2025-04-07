
const Header = (props) => <h1>{props.course}</h1>

const Total = ({parts}) => {
  var totalNumber = parts.reduce((sum, parts) => sum + parts.exercises, 0)
  return (
  <h4>total of {totalNumber} exercises</h4>
  )
}

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({parts}) => (
  <div>
    {parts.map(part =>
      <Part key={part.id} part={part}
        />
    )}
  </div>
)

const Course = ({course}) => {
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>  
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'one more',
        exercises: 10,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App