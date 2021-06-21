import React from 'react'
import Card from '../../Components/Card'
import Sidebar from '../../Components/Sidebar'
import TitleCard from '../../Components/TitleCard'
import './style.css'
import picture from '../../Assets/Icons/evpic1.jpg'

/**
* @author
* @function Contact
**/

const Contact = (props) => {
  return(
    <section className="Chme">
        <div className='cname'>
            <TitleCard>
                <p className='evan'>Evan Ashbrook</p>
            </TitleCard>
        </div>
        <div className='mypic'>
            <Card>
                <img src={picture} alt='profilepic'/>
            </Card>
        </div>
        <div className='Cside'>
            <Sidebar>
                <p className='cp1'>Get In Touch</p>
                <ul className='clist'>
                    <li>Email: eashbrook@protonmail.com</li>
                    <li>LinkedIn: <a href='https://www.linkedin.com/in/evan-ashbrook-b6b556169/'>Evan Ashbrook</a></li>
                </ul>
            </Sidebar>
        </div>
    </section>
   )

 }

export default Contact