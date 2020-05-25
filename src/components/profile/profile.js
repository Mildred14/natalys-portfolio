import React from 'react'
import ProfilePicture  from '../../images/profile-picture.png'
import './profile.scss'

const profile = () => {
  return (
    <div className="profile d-flex flex-column align-items-center justify-content-center my-3">
      <div className="wrap-image">
        <img src={ProfilePicture} height="260" />
      </div>
      <div>
        <h3 className="mb-0">I'M</h3>
        <h1 className="name my-0">MILDRED SILVA</h1>
        <h4 className="font-weight-bold">Front-end web developer | Web designer | Coffee tester</h4>
      </div>
    </div>
  )
}

export default profile
