import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
    return (
        <div id="About" className="aboutsection">            
            <p className="aboutbodytext">
                I am a Software Engineer based out of San Francisco, CA with 
                {/* Skills I want to mention: research, strong communication    */}
            <br/>
            <br/>
            Interested in learning more?
            </p>
            <Link to="/PDFResume">Resume</Link> | <Link to="/linkedin">Linkedin</Link> | <Link to="/github">Github</Link>
        </div>
    )
}

export default About