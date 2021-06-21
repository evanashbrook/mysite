import React from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
    <nav className="headerMenu">
        <li><NavLink to='/'>Evan Ashbrook</NavLink></li>
        <li><NavLink to='/education'>Education</NavLink></li>
        <li><NavLink to='projects'>Django DB Project</NavLink></li>
        <li><NavLink to='/interests'>Interests</NavLink></li>
    </nav>
    <div className='contact'>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
        
    </div>
    

</header>
   )

 }

export default Header