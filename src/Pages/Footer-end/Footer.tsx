import React from 'react'

import { PhoneFill, EnvelopeAtFill, GeoAltFill, Github, Linkedin, Steam, Facebook } from 'react-bootstrap-icons'
import './Footer.css'

export default function Footer() {
    return(
        <section className='footer'>
            <div className='footer-content'>
                <p>Contact Info</p>
                <hr></hr>
                <div className='contact-info'>
                    <p><EnvelopeAtFill></EnvelopeAtFill> suhonen.arttu2002@gmail.com</p>
                    <p><PhoneFill></PhoneFill> 040-0856880</p>
                    <p><GeoAltFill></GeoAltFill> Jokelantie 616, Oulu</p>
                </div>
            </div>
            <div className='footer-content'>
                <p>Links</p>
                <hr></hr><br></br>
                <div className='links-column'>
                    <a className='footer-link' href='#home'>.Home()</a>
                    <a className='footer-link' href='#about'>.About-me()</a>
                    <a className='footer-link' href='#skills'>.Skills()</a>
                    <a className='footer-link' href='#projects'>.Projects()</a>
                    <a className='footer-link' href='#contact'>.Contact()</a>
                </div>
            </div>
            <div className='footer-content'>
                <p>Social</p>
                <hr></hr>
                <div className='social'>
                    <a className='social-link' href='https://www.linkedin.com/in/arttu-suhonen/' target='_blank' rel='noreferrer'><Linkedin></Linkedin></a>
                    <a className='social-link' href='https://github.com/Gh0stMaj0r' target='_blank' rel='noreferrer'><Github></Github></a>
                    <a className='social-link' href='https://steamcommunity.com/id/Gh0stMaj0r/' target='_blank' rel='noreferrer'><Steam></Steam></a>
                    <a className='social-link' href='https://www.facebook.com/arttu.suhonen.96' target='_blank' rel='noreferrer'><Facebook></Facebook></a>
                </div>
                <div className='footer-copyright'>
                    <p className='copyright'>© Arttu Suhonen 2023</p>
                    <p className='rights'>All Rights Reserved</p>
                </div>
            </div>
        </section>
    )
}