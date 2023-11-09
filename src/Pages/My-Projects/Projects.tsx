import React from 'react'

import { Github, Cast } from 'react-bootstrap-icons'
import './Projects.css'

export default function Projects() {
    return(
        <section className='projects' id='projects'>
            <h2>Projects</h2>
            <div className='projects2'>
            <div className='projects3'>
            <div className="card">
                <div className='overlay'>
                    <div className='project-buttons'>
                        <div className='projects-text-div'>
                            <p className='projects-header'>First coding project</p>
                            <p className='projects-text'>Working website to the painting company</p>
                            <p className='projects-text'>HTML, CSS, Javascript</p>
                        </div>
                        <a href='https://github.com/Gh0stMaj0r/School-Project-2023' target='_blank'>
                            <button className='p-button'><Github></Github> Github</button>
                        </a>
                        <a href='https://geronimo.okol.org/~suhart/Projektity%c3%b6%202023/' target='_blank'>
                            <button className='p-button'><Cast></Cast> View demo</button>
                        </a>
                    </div>
                </div>
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <img className='project1' src={require('../../Images/kotkantie-proju.png')}></img>
            </div>
        </div>

        <div className="card">
                <div className='overlay'>
                    <div className='project-buttons'>
                        <div className='projects-text-div'>
                            <p className='projects-header'>React example website</p>
                            <p className='projects-text'>Made by using premade design, and I wrote the code</p>
                            <p className='projects-text'>React, HTML, CSS</p>
                        </div>
                        <a href='https://github.com/Gh0stMaj0r/React-example-website' target='_blank'>
                            <button className='p-button'><Github></Github> Github</button>
                        </a>
                        <a href='' target='_blank'>
                            <button className='p-button'><Cast></Cast> View demo</button>
                        </a>
                    </div>
                </div>
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <img className='project2' src={require('../../Images/react-example-website.PNG')}></img>
            </div>
        </div>

        <div className="card">
                <div className='overlay'>
                    <div className='project-buttons'>
                        <div className='projects-text-div'>
                            <p className='projects-header'>PHP Library System</p>
                            <p className='projects-text'>School project/library system. Kind of shitty but it works</p>
                            <p className='projects-text'>PHP, HTML and MYSQL</p>
                        </div>
                        <a href='https://github.com/Gh0stMaj0r/PHP-library-school-project' target='_blank'>
                            <button className='p-button'><Github></Github> Github</button>
                        </a>
                        <a href='https://geronimo.okol.org/~suhart/Projektity%c3%b6%202023/' target='_blank'>
                            <button className='p-button'><Cast></Cast> View demo</button>
                        </a>
                    </div>
                </div>
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <img className='project1'></img>
            </div>
        </div>
    </div>
    </div>
    </section>
    )
}