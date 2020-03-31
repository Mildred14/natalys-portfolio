import { Link } from 'gatsby'
import React from 'react'
import './Header.scss'

const Header = () => (
  <header>
    <div className="navbar d-flex align-items-center justify-content-center">
      <Link to="/" className="mr-2">Home</Link>
      <Link to="/" className="mr-2">About</Link>
      <Link to="/" className="mr-2">Experience</Link>
      <Link to="/" className="mr-2">Skills</Link>
    </div>
  </header>
)

export default Header
