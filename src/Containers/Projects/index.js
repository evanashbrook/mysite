import React from 'react'
import Graph from '../../Components/Graph'
import Mgraph from '../../Components/Mgraph'
import Mgraph2 from '../../Components/Mgraph2'
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
        <div className="project">
          <PlotCard>
            <div className='plt'>
              <Graph />
            </div>
          </PlotCard>
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
        <div className="m-project2">
          <PlotCard>
            <div className='m-plt2'>
              <Mgraph />
            </div>
          </PlotCard>
        </div>}
      {isTabletOrMobile &&
        <div className="m-project2">
          <PlotCard>
            <div className='m-plt2'>
              <Mgraph2 />
            </div>
          </PlotCard>
        </div>}
    </section>
  )

}

export default Projects