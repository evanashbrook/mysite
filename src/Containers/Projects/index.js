import React from 'react'
import Graph from '../../Components/Graph'
import Graph2 from '../../Components/Graph2'
import PlotCard from '../../Components/Plot'
import './style.css'

/**
* @author
* @function Projects
**/

const Projects = (props) => {
  return (
    <section className="proj">
      <div className="project">
        <PlotCard>
          <div className='plt'>
            <Graph />
          </div>
        </PlotCard>
      </div>
      <div className="project2">
        <PlotCard>
          <div className='plt2'>
            <Graph2 />
          </div>
        </PlotCard>
      </div>
    </section>
  )

}

export default Projects