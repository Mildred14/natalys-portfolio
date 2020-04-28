import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Icon from 'images/icon.svg'
import BurgerIcon from 'images/burger-icon.png'
import './Header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    function handleSize() {
      setWidth(window.innerWidth)
    }    
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize)
  },[])

  return (
    <header className={`navbar d-flex p-3 ${isOpen && width < 764 ? 'active' : ''}`}>
      <div className="d-md-flex w-100">
        <div className="col-md-1 d-none d-md-flex justify-content-end p-0">
          <img src={Icon} height="40" className="m-0 icon-navbar"/>
        </div>

        <div className="d-flex d-md-none w-100 justify-content-end">
          <img src={BurgerIcon} height="30" value={isOpen} className="m-0" onClick={toggle}/>
        </div>

        <div className={`btn-menu align-items-center justify-content-center py-0 w-100`}>
          <Link to="#home" className="mr-md-4 my-3 my-md-0">Home</Link>
          <Link to="#about" className="mr-md-4 my-3 my-md-0">About</Link>
          <Link to="#experience" className="mr-md-4 my-3 my-md-0">Experience</Link>
          <Link to="#skills" className="mr-md-4 my-3 my-md-0">Skills</Link>
        </div>

      </div>
    </header>
  )
}

export default Header
