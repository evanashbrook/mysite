import React from 'react';
import './style.css'

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
    <div className="sdbr">{props.children}</div>
   )

 }

export default Sidebar