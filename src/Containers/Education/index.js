import React from 'react'
import './style.css'
import Sidebar from '../../Components/Sidebar'
import sas from '../../Assets/Icons/SAS_Hall.jpg'
import Card from '../../Components/Card'
import TitleCard from '../../Components/TitleCard'
import Card2 from '../../Components/Card2'
import SoftCard from '../../Components/SoftCard'

/**
* @author
* @function Education
**/

const Education = (props) => {
    return (
        <section className="Ehme">

            <div className='state'>
                <TitleCard>
                    <p className='ncstate'>Nc State University</p>
                </TitleCard>
            </div>
            <div className='sas'>
                <Card>
                    <img src={sas} alt='sas' />
                </Card>
            </div>
            <div className="Eside">
                <Sidebar>
                    <p className='p1'>Bachelor of the Sciences in Mathematics</p>
                    <p className='p2'>with a minor concentration in Philosophy</p>
                    <ul className='schlist'>
                        <li>Mathematics for Scientific Computing</li>
                        <li>Probability Theory and Stochastic Processes</li>
                        <li>Statistical Methods and Distributions</li>
                        <li>Complex Analysis</li>
                        <li>Psychology</li>
                        <li>Sociology</li>
                        <li>Philosophy and History</li>
                    </ul>
                </Sidebar>
            </div>
            <div className="Eside2">
                <Card2>
                    <p className='p21'>Web Dev</p>
                    <p className='p22'>Learning Mathematics and Philosophy produced some of the most enlightening moments in my life, and they prepared me to understand how to generalize, problem solve, and shift perspective.  I very much value the years I spent learning these skills.  However, their pure theoretical nature kept me from applying my knowledge to my actions.  They also did not provide too many professions to apply my knowledge to.  Given my background with python, and a realization that computers are the most amazing thing to happen to humanity, I decided to dive head first into learning computer technology at large.  I'll admit, it will be a long journey, but I've started here at web development and I'm pretty proud of what I've been able to accomplish.</p>
                    <dl className='knowlist'>
                        <p className='frontend'>Frontend</p>
                        <dt>JSX</dt>
                        <dd>Setting, updating, mapping and looping over states, mounting components to make POST, GET, PUT and DELETE requests, manipulating js arrays and objects.</dd>
                        <dt>CSS</dt>
                        <dd>Styling, formatting, animating, coloring, sticky headers and sidebars</dd>
                    </dl>
                    <dl className='knowlist2'>
                        <p className='backend'>Backend</p>
                        <dt>Python</dt>
                        <dd>Building the backend architecture required to run an application on the Django REST web framework.</dd>
                        <dd>Using Django Rest can be a bit tricky when trying to populate your database from the get-go.  I've developed an efficient method for configuring csv/json files into the correct format to load them into the database as what django calls "fixtures".</dd>
                        <dt>SQL</dt>
                        <dd>Creating/manipulating PostgreSQL Databases, adding/removing/setting privileges for users</dd>
                    </dl>

                </Card2>
            </div>
            <div className='btm'>
                <Card2>
                    <div className='btmpage'>
                        <p className='fend'>Front end</p>
                        <p className='bend'>Back end</p>
                    </div>
                    <div className='btmlists'>
                        <ul className='l1'>
                            <li className='react'><SoftCard>React</SoftCard></li>
                            <li className='react-pltly'><SoftCard>React-Plotly</SoftCard></li>
                            <li className='axios'><SoftCard>Axios</SoftCard></li>
                        </ul>
                        <ul className='l2'>
                            <li className='django'><SoftCard>Django</SoftCard></li>
                            <li className='djangorf'><SoftCard>Django REST Framework</SoftCard></li>
                        </ul>
                    </div>
                </Card2>
            </div>
        </section>
    )

}

export default Education