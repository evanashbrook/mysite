import React from 'react'
import Card from '../../Components/Card'
import Sidebar from '../../Components/Sidebar'
import TitleCard from '../../Components/TitleCard'
import './style.css'
import picture from '../../Assets/Icons/evpic1.jpg'
import { useMediaQuery } from 'react-responsive'

/**
* @author
* @function Contact
**/

const Contact = (props) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
    return (
        <section className="Chme">
            {isDesktopOrLaptop &&
                <div className='cname'>
                    <TitleCard>
                        <p className='evan'>Evan Ashbrook</p>
                    </TitleCard>
                </div>}
            {isDesktopOrLaptop &&
                <div className='mypic'>
                    <Card>
                        <img src={picture} alt='profilepic' />
                    </Card>
                </div>}
            {isDesktopOrLaptop &&
                <div className='Cside'>
                    <Sidebar>
                        <p className='cp1'>Get In Touch</p>
                        <ul className='clist'>
                            <li>Email: eashbrook@protonmail.com</li>
                            <li>LinkedIn: <a href='https://www.linkedin.com/in/evan-ashbrook-b6b556169/'>Evan Ashbrook</a></li>
                        </ul>
                    </Sidebar>
                </div>}

            {isTabletOrMobile &&
                <div className='m-cname'>
                    <TitleCard>
                        <p className='m-evan'>Evan Ashbrook</p>
                    </TitleCard>
                </div>}
            {isTabletOrMobile &&
                <div className='m-mypic'>
                    <Card>
                        <img src={picture} alt='m-profilepic' />
                    </Card>
                </div>}
            {isTabletOrMobile &&
                <div className='m-Cside'>
                    <Sidebar>
                        <p className='m-cp1'>Get In Touch</p>
                        <ul className='m-clist'>
                            <li>Email: eashbrook@protonmail.com</li>
                            <li>LinkedIn: <a href='https://www.linkedin.com/in/evan-ashbrook-b6b556169/'>Evan Ashbrook</a></li>
                        </ul>
                    </Sidebar>
                </div>}
        </section>
    )

}

export default Contact