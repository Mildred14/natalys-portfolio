import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="d-flex align-items-center justify-content-center">
      <Link to="/" className="mr-2">Home</Link>
      <Link to="/" className="mr-2">About</Link>
      <Link to="/" className="mr-2">Experience</Link>
      <Link to="/" className="mr-2">Skills</Link>
    </div>
  </header>
)

export default Header
