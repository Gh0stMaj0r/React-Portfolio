import React from "react"

import './Aboutme.css'

export default function About() {
    return (
        <div className="about" id="about">
            <h2>About me</h2>
            <div className="about2">
                <div className="img">
                    <img src={require('../../Images/Kuvani.png')}></img>
                </div>
                <div className="about-text">
                    <h3>Arttu Suhonen, 21</h3>
                    <p className="intro">
                        " I am 20 years old guy from Haukipudas. 
                        Currently studying web developing in OSAO Kaukovainio. 
                        I am very friendly and I get along with everyone. 
                        I've always liked computers and always been interested in coding. 
                        I'm not afraid of challenges, I do them to the best of my ability. 
                        I'm ready for anything! "
                    </p>
                    <li>10.08.2002</li>
                    <li>Oulu, Finland</li>
                    <li>Developer student in OSAO</li>
                    <li>Eager coder</li>

                    <a href="https://drive.google.com/file/d/1xz9GfoxAUKf4HRcMyfQH5VE4ZA0ZY_2g/view?usp=drive_link" target="_blank">
                        <button className="button">
                            <span className="button_lg">
                            <span className="button_sl"></span>
                            <span className="button_text">Download CV</span>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}