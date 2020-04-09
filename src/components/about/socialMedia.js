import React from 'react'
import Medium from '../../images/medium.png'
import Twitter from '../../images/twitter.png'
import Instagram from '../../images/Instagram.png'

const socialMedia = () => {
  const icons = [
    {
      image: Medium,
      link : "https://medium.com/@mildrednatalysilva"
    },
    {
      image: Instagram,
      link : "https://www.instagram.com/natalymendez09/"
    },
    {
      image: Twitter,
      link : "https://twitter.com/__Mildreed"
    },
  ]

  const imgs = icons.map((icon, index) => {
    return (
      <a key={index} href={icon.link}><img src={icon.image} height="20" className="mr-3" /></a>
    )
  })

  return (
    <div>
      {imgs}
    </div>
  )
}

export default socialMedia
