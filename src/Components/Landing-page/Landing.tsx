import React from "react"

import { Linkedin, Github, Steam, Facebook, ArrowDown } from "react-bootstrap-icons"
import './Landing.css'

export default function Landing() {
    return (
        <><div className="landing" id="home">
            <div className="text">
                <h1>HI, I AM <span className="name">ARTTU SUHONEN</span></h1>
                <h3 className="codertext">Future Full-Stack Developer</h3>
                <p className="quote">"I am passionate coder, who likes to learn more and
                    write beautiful code"</p>
                <div>
                    <a href="#about"><button className="startbutton"><ArrowDown></ArrowDown> GET STARTED!</button></a>
                </div>
            </div>
        <div className="links">
            <a className="link" href="https://www.linkedin.com/in/arttu-suhonen/" target="_blank"><Linkedin/></a>
            <a className="link" href="https://github.com/Gh0stMaj0r" target="_blank"><Github/></a>
            <a className="link" href="https://steamcommunity.com/id/Gh0stMaj0r/" target="_blank"><Steam/></a>
            <a className="link" href="https://www.facebook.com/arttu.suhonen.96" target="_blank"><Facebook/></a>
        </div>
        </div></>
    );
}