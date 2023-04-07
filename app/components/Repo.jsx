import React from 'react'
import { FaCodeBranch, FaStar, FaEye } from 'react-icons/fa'

async function fetchRepo(name) {
  const response = await fetch(`https://api.github.com/repos/srishailam/${name}`, {
    next: {
      revalidate: 60
    }
  })
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  return (
    <div className=''>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stat">
        <FaStar />
        <span>{repo.stargazers_count}</span>
      </div>
      <div className="card-stat">
        <FaCodeBranch />
        <span>{repo.forks_count }</span>
      </div>
      <div className="card-stat">
        <FaEye />
        <span>{repo.watchers_count}</span>
      </div>
    </div>
  )
}

export default Repo