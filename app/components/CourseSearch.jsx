import React, {useState} from 'react'

const CourseSearch = ({ getSearchResults}) => {

  const [search, setSearch] = useState('')


  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:3000/api/courses/search?query=${search}`)
    const courses = await res.json()

    console.log('courses search res:', courses)

    getSearchResults(courses)
  }

  return (
   <form onSubmit={handleSubmit} className="search-form">
      <input type='text' value={search} onChange={handleChange} className="search-input" placeholder='Search course'/>
      <button type='submit' className='search-button'>Search</button>
    </form>
  )
}

export default CourseSearch