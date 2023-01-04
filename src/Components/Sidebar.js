import React from 'react'
import { SlHome, SlSettings,SlUser, SlGrid,SlStar,SlGlobe } from "react-icons/sl";
const sidebar = () => {
  return (
    <div className='sidebar'>
      <h3> <SlHome/> Dash Board</h3>
      <nav>
        <a href='/'><SlGrid/> Widget</a>
        <a href='/'><SlStar/> Reviews</a>
        <a href='/'><SlUser/> Customers</a>
        <a href='/'><SlGlobe/> Online Analysis</a>
        <a href='/'><SlSettings/> Setting</a>
      </nav>
    </div>
  )
}

export default sidebar
