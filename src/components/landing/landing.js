import React from 'react'
import './landing.scss'

const Landing = ({ klass }) => {

  return (
    <div className={`landing ${klass} text-center text-white d-flex align-items-center justify-content-center`}>
      <div className>
        <h1 className="cursive mb-0">Hello</h1>
        <h1 className="m-0 welcome-text">WELCOME</h1>
        <h1 className="m-0">TO<span className="mx-2 cursive huge-title">my</span>BIO</h1>
      </div>
    </div>
  )
}

export default Landing
