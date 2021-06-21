import React from 'react'
import './style.css'

/**
* @author
* @function PlotCard
**/

const PlotCard = (props) => {
  return (
    <div className='plotty'>{props.children}</div>
  )

}

export default PlotCard