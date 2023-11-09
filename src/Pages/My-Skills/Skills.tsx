import React from 'react';

import CircularProgress from '@mui/joy/CircularProgress';

import {CodeSquare} from 'react-bootstrap-icons'
import {PcDisplay} from 'react-bootstrap-icons'
import {Tablet} from 'react-bootstrap-icons'
import './Skills.css'

export default function Skills() {
    return (
        <section className="skills" id='skills'>
                <h2>My Skills</h2>
            <div className='skills2'>
                <div className='skills3'>
                    <h4><CodeSquare/> Programming</h4>
                    <p>I have been studying coding almost 1,5 years now.
                        And I have learned a lot, I know many programming languages
                        and also learning new every day, Also know some basics about back-end. I am passionate coder who
                        likes to write code even free time and learn new!
                    </p>
                    
                    <h4><PcDisplay/> UI/UX Design</h4>
                    <p>I specialize in UI/UX design, a pivotal aspect of modern web development. 
                        Leveraging tools like Adobe Photoshop and Adobe XD, I craft intuitive user interfaces, 
                        optimize user experiences, and ensure accessibility.
                    </p>

                    <h4><Tablet/> Responsive design</h4>
                    <p>I specialize in responsive web design, a critical aspect of modern web development. 
                        My skills include creating flexible layouts, using media queries, 
                        optimizing performance, and ensuring accessibility. 
                        I prioritize the user experience across various devices, 
                        making websites look and function beautifully on any screen size.
                    </p>
                </div>
                  <div className='wrapper'>
                    <div className='container'>
                        <h2>Coding</h2>
                            <div className='coding-logos'>
                                <img className='code-logos' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                                <img className='code-logos' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                                <img className='code-logos' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                            </div>
                            <div className='coding-logos'>
                                <img className='code-logos' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                                <img className='code-logos' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                                <img className='code-logos' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
                            </div>
                        {/* <div className="skillbar">
                            <div className="details">
                                <span>HTML + CSS</span>
                                <span>90%</span>
                            </div>
                                <div className="bar">
                                <div id="html-bar"></div>
                            </div>
                        </div>

                        <div className="skillbar">
                            <div className="details">
                                <span>Javascript</span>
                                <span>50%</span>
                            </div>
                                <div className="bar">
                                <div id="javascript-bar"></div>
                            </div>
                        </div>

                        <div className="skillbar">
                            <div className="details">
                                <span>jQuery</span>
                                <span>20%</span>
                            </div>
                                <div className="bar">
                                <div id="jQuery-bar"></div>
                            </div>
                        </div>

                        <div className="skillbar">
                            <div className="details">
                                <span>React</span>
                                <span>40%</span>
                            </div>
                                <div className="bar">
                                <div id="react-bar"></div>
                            </div>
                        </div>

                        <div className="skillbar">
                            <div className="details">
                                <span>Photoshop</span>
                                <span>40%</span>
                            </div>
                                <div className="bar">
                                <div id="photoshop-bar"></div>
                            </div>
                        </div>

                        <div className="skillbar">
                            <div className="details">
                                <span>Adobe XD</span>
                                <span>60%</span>
                            </div>
                                <div className="bar">
                                <div id="xd-bar"></div>
                            </div>
                        </div> */}
                        <h2>Languages</h2>
                        <div className='circle'>
                        <div className='languages'>
                        <CircularProgress
                        sx={{'--CircularProgress-size': '100px',
                        color: 'var(--joy-palette-primary-500, #FFFF)',
                        '--CircularProgress-trackColor': '#0e1725',
                        '--CircularProgress-progressColor': '#0B6BCB',
                        '@media only screen and (max-width: 600px)': {
                            '--CircularProgress-size': '80px',
                        },
                    }}
                        thickness={10}
                        determinate
                        value={100}
                        >100%</CircularProgress>
                        <span>Finnish</span>
                        </div>

                        <div className='languages'>
                        <CircularProgress
                        sx={{'--CircularProgress-size': '100px',
                        color: 'var(--joy-palette-primary-500, #FFFF)',
                        '--CircularProgress-trackColor': '#ccc',
                        '--CircularProgress-progressColor': '#0B6BCB',
                        '@media only screen and (max-width: 600px)': {
                            '--CircularProgress-size': '80px'
                        }
                        }}
                        thickness={10}
                        determinate
                        value={65}
                        >65%</CircularProgress>
                        <span>English</span>
                        </div>

                        <div className='languages'>
                        <CircularProgress
                        sx={{'--CircularProgress-size': '100px',
                        color: 'var(--joy-palette-primary-500, #FFFF)',
                        '--CircularProgress-trackColor': '#ccc',
                        '--CircularProgress-progressColor': '#0B6BCB',
                        '@media only screen and (max-width: 600px)': {
                            '--CircularProgress-size': '80px'
                        }
                        }}
                        thickness={10}
                        determinate
                        value={15}
                        >15%</CircularProgress>
                        <span>Swedish</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}