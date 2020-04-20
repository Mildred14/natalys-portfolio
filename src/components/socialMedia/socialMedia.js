import React from 'react'
import './socialMedia.scss'

const socialMedia = () => {
  const icons = [
    {
      class: 'medium',
      link : "https://medium.com/@mildrednatalysilva"
    },
    {
      class: 'instagram',
      link : "https://www.instagram.com/natalymendez09/"
    },
    {
      class: 'twitter',
      link : "https://twitter.com/__Mildreed"
    },
  ]

  const imgs = icons.map((icon, index) => {
    return (
      <a key={index} href={icon.link}>
        <div className={`mr-3 ${icon.class}`} />
      </a>
    )
  })

  return (
    <div className="d-flex social-media">
      {imgs}
    </div>
  )
}

export default socialMedia
