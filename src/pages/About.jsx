import React from 'react'
import about_bg from '../assets/img/about/about_bg.jpeg'
import { Link } from 'react-router-dom'
import AboutFood from '../components/about/AboutFood'
import Video from '../components/about/Video'
import MadeRight from '../components/about/MadeRight'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="bg-image d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url(${about_bg})` }}>
          <h1>ABOUT US</h1>
          <p className='mt-2'><Link to="/">Home Page</Link>
            <i className="fa-solid fa-chevron-right mx-2"></i>
            <span>About us</span>
          </p>
        </div>
        <AboutFood />
        <Video />
        <MadeRight />
      </div>
    </>
  )
}

export default About