import React from 'react'
import Graph from '../../Components/Graph'
import Graph2 from '../../Components/Graph2'
import PlotCard from '../../Components/Plot'
import './style.css'
import { useMediaQuery } from 'react-responsive'

/**
* @author
* @function Projects
**/

const Projects = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  return (
    <section className="proj">
      {isDesktopOrLaptop &&
        <div className='plt'>
          <Graph />
        </div>}
      {isDesktopOrLaptop &&
        <div className="project2">
          <PlotCard>
            <div className='plt2'>
              <Graph2 />
            </div>
          </PlotCard>
        </div>}

      {isTabletOrMobile &&
        <div className='m-plt2'>
          <Graph />
        </div>}
      {isTabletOrMobile &&
        <div className='m-plt2'>
          <Graph2 />
        </div>}
    </section>
  )

}

export default Projects