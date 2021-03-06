import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

/**
* @author
* @function Header
**/

const Header = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  return (
    <header className="header">
      {isDesktopOrLaptop &&
        <nav className="headerMenu">
          <li><NavLink to='/'>Evan Ashbrook</NavLink></li>
          <li><NavLink to='/education'>Education</NavLink></li>
          <li><NavLink to='projects'>Django DB Project</NavLink></li>
          <li><NavLink to='/interests'>Responsive Practices</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
        </nav>}

      {isTabletOrMobile &&
        <nav className="m-headerMenu">
          <li><NavLink to='/'>Evan Ashbrook</NavLink></li>
          <li><NavLink to='/education'>Education</NavLink></li>
          <li><NavLink to='projects'>Django DB Project</NavLink></li>
          <li><NavLink to='/interests'>Responsive Practices</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
        </nav>}


    </header>
  )

}

export default Header