import React from 'react'
import './experience.scss'

const Experience = ({ klass }) =>
  <div id="experience" className={`experience ${klass} mt-5 py-4`}>
    <div className="d-flex justify-content-center mb-3">
      <h3>EXPERIENCE</h3>
    </div>
    <ul className="experience-list list-unstyled d-flex w-100 justify-content-around">
      <li><a href="https://www.devgile.com" target="_blank" rel="noopener noreferrer">HeroCoders</a></li>
      <li><a href="https://www.michelada.io" target="_blank" rel="noopener noreferrer">michelada.io</a></li>
    </ul>
  </div>

export default Experience
