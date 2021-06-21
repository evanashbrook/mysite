import React from 'react'
import './style.css'

/**
* @author
* @function TitleCard
**/

const TitleCard = (props) => {
  return(
    <div className='titleCard'>{props.children}</div>
   )

 }

export default TitleCard