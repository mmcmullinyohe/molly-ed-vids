import React from 'react'
import Nav from '../components/Nav'
import Molly from '../assets/Molly.jpg'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="intro">
        <div className="intro__info">
        Get ready to learn some exciting new skills through our video lessons and courses!
        </div>
        <div className="intro__img">
          <figure>
            <img src={Molly}/>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Home
