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

const Course = ({courses}) => {
  return (
    <div>
      {courses.map(course => {
      // console.log(course.id)
      return (
      <div key ={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} /> 
      </div>
      )
    })}
    </div>  
  )
}

export default Course