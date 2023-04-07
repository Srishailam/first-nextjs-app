import { Suspense } from 'react'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React from 'react'
import Repo from './../../../components/Repo'

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>Back to Repos</Link>
      <p>Repo Details</p>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading repo contents...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage