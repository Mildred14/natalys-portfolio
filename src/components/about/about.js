import React from 'react'
import SocialMedia from 'components/socialMedia/socialMedia'
import './about.scss'

const About = () =>
  <div className="about row no-gutters justify-content-center text-center">
    <div className="row align-self-end">
      <h3 className="text-white m-0">ABOUT ME</h3>
    </div>
    <div className="row justify-content-center align-items-center">
      <div className="col-md-6">
        <p className="text-white mb-0">Based in Mexico, I studied Software Engineering at Universidad de Colima,
          which lead me to begin my career as developer. I’m 23 years old and
          I’ve been working professionally since 2018 as web developer,  both front-end
          and back-end. In fact one of my hobbies and  perfect match is the graphic
          design because I love working with the front-end side. </p>
      </div>
    </div>
    <SocialMedia />
  </div>
export default About
