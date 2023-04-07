import React from 'react'
import Link from 'next/link'

const Courses = ({ courses }) => {

  console.log('courses in C', courses)

  return (
    <div className='courses'>
      <h2>Courses</h2>
      {
        courses.map(course => (
          <div key={course.id} className='course card'>
            <h3>{course.title}</h3>
            <small>{course.level}</small>
            <p>{course.description}</p>
            <Link href={course.url} target='_blank' className='btn'>View Course</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Courses