import React from 'react'
import Mainpage from '../../Components/Mainpage'
import Sidebar from '../../Components/Sidebar'
import './style.css'

/**
* @author
* @function Interests
**/

const Interests = (props) => {
  return(
    <section className="Ihme">
        <div className="Iside"><Sidebar>Interests Sidebar</Sidebar></div>
        <div className="Imain"><Mainpage>Interests</Mainpage></div>
        <div className="Imain-2"><Mainpage>Interests</Mainpage></div>
        <div className="Iside-2"><Sidebar>Interests Sidebar</Sidebar></div>
    </section>
   )

 }

export default Interests