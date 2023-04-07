"use client"
import Link from 'next/link'
import React, {useState, useEffect } from 'react'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'
import Loading from './loading'

const HomePage = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
  }, []);

  if(loading){
    return <Loading />
  }

  return (
    <div>
      <h1>Welcome to Srishailam</h1>
      <CourseSearch getSearchResults={
        (searchResults) => {
          console.log('searchResults', searchResults);
          setCourses(searchResults);
        }
      }/>
      <Courses courses={courses} />
    </div>
  )
}

export default HomePage