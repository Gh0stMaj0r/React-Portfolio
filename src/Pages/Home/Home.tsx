import React from "react"

import './Home.css';
import Header from "../../Components/Header/Header";
import Landing from "../../Components/Landing-page/Landing";
import About from "../About-me/Aboutme";
import Skills from "../My-Skills/Skills";
import Projects from "../My-Projects/Projects";
import Contact from "../Contact-me/Contact";
import Footer from "../Footer-end/Footer";

export default function Home() {
    return (
        <>

        <Header/>

        <Landing/>

        <About/>

        <Skills/>

        <Projects/>

        <Contact/>

        <Footer/>
        
        </>
     );
}