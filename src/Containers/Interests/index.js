import React from 'react'
import './style.css'
import { useMediaQuery } from 'react-responsive'

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
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      {isPortrait && <p>You are in portrait mode</p>}
      {isLandscape && <p>You are in landscape mode</p>}
    </section>
  )

}

export default Interests