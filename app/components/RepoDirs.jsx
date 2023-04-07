import Link from 'next/link'
import React from 'react'

async function fetchRepoContents(name) {

  await new Promise(resolve => setTimeout(resolve, 3000))

  const response = await fetch(`https://api.github.com/repos/srishailam/${name}/contents`, {
    next:{
      revalidate: 60
    }
  })
  const repo = await response.json()
  return repo
}

const RepoDirs = async ({name}) => {
  const contents = await fetchRepoContents(name)

  const dirs = contents.filter(content => content.type === 'dir');
  
  return (
    <>
      <h2>Repo Directories</h2>
      <ul>
        {dirs.map(dir => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDirs