import React from 'react'
import './style.css'
import { useMediaQuery } from 'react-responsive'

/**
* @author
* @function Home
**/

const Home = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  return (
    <section className="Hhme">
      {isDesktopOrLaptop &&
        <div className="Hmain">
          <p className='fronttxt'>Evan Ashbrook</p>
          <p className='fronttxt2'>Web Dev</p>
        </div>}
      {isTabletOrMobile &&
        <div className="m-Hmain">
          <p className='m-fronttxt'>Evan Ashbrook</p>
          <p className='m-fronttxt2'>Web Dev</p>
        </div>}
    </section>
  )

}

export default Home