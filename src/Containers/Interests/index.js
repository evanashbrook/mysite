import React from 'react'
import './style.css'
import { useMediaQuery } from 'react-responsive'
import Card2 from '../../Components/Card2'

/**
* @author
* @function Interests
**/


const Interests = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

  return (
    <section className="Ihme">
      <div className='response'>
        <Card2>
          <h2>This web app is responsive</h2>
          <h1>Change the size of your browser window, or rotate your phone, to see how event listeners pick up your action and effect responsive change on the webpage. </h1>
          {isDesktopOrLaptop && <p className='setting1'>Setting: Desktop/Laptop</p>}
          {isTabletOrMobile && <p className='setting2'>Setting: Phone/Tablet</p>}
          {isPortrait && <p className='mode1'>Mode: Portrait</p>}
          {isLandscape && <p className='mode2'>Mode: Landscape</p>}
        </Card2>
      </div>
    </section>
  )

}

export default Interests