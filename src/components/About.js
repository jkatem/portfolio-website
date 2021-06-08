import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
    return (
        <div id="About" className="aboutsection">
            <h1 className="abouth1">
                <Link to='/'>JENNIFER MIAO</Link> | Software Engineer 
            </h1>
            <p className="aboutbodytext">
                I am a Software Engineer based out of San Francisco, CA.              
            <br/>
            <br/>
            Interested in learning more?
            </p>
            <Link to="/PDFResume">Resume</Link> | <Link to="/linkedin">Linkedin</Link>
        </div>
    )
}

export default About