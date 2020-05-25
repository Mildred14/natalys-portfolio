import React from 'react'
import './experience.scss'

const experience = ({ klass }) => {
  return (
    <div className={`experience ${klass} mt-5 py-4`}>
      <ul className="experience-list list-unstyled d-flex w-100 justify-content-around">
        <li><a href="#" target="_blank">HeroCoders</a></li>
        <li><a href="https://www.michelada.io" target="_blank">michelada.io</a></li>
      </ul>
    </div>
  )
}

export default experience
