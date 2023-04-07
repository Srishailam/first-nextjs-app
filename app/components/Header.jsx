import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>Srishailam</Link>
        </div>
        <nav className='links'>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Team</Link>
          <Link href='/code/repos'>Code</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header