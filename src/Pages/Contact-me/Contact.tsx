import React from "react";

import { Github, Linkedin } from "react-bootstrap-icons";
import './Contact.css'

export default function Contact() {
    return(
        <section className="contact" id="contact
        ">
            <h2>Contact Me</h2>
            <div className="contact-form">
                <div className="contact-form2">
                <form>
                    <div className="form-row">
                        <input type="text" placeholder="Firstname"></input>
                        <input type="text" placeholder="Lastname"></input>
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Phone"></input>
                        <input type="text" placeholder="Email"></input>
                    </div>
                    <input id="subject" type="text" placeholder="Subject"></input>
                    <textarea placeholder="Message"></textarea>
                    <div className="form-links">
                        <a className="form-link" href="https://github.com/Gh0stMaj0r"><Github></Github></a>
                        <a className="form-link" href="www.linkedin.com/in/arttu-suhonen"><Linkedin></Linkedin></a>
                    </div>
                    <input type="submit" value={"Submit"} className="submit-button"></input>
                </form>
                </div>
            </div>
        </section>
    )
}