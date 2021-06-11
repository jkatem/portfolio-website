import React from 'react'
import Me from '../Images/Me.jpeg'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
    return (
        <div id="About" >
            <div className="flex-container">
                <img src={Me} alt="Profile Pic"/>
            
                I am a Software Engineer based out of San Francisco, CA with a background in the legal field. akfjsakdfjkasfjsdfkaskfjsjdf akslfksajdf akslfj klsadfjaskf. Jkdfjs. ksdfjskd asjfksf aksfjkjf asfjskj.
                {/* Skills I want to mention: research, strong communication    */}
            </div>
            <p>
            Interested in learning more? 
            
            <Link to="/PDFResume">Resume</Link> | <Link to="/linkedin">Linkedin</Link> | <Link to="/Github">Github</Link>
            </p>
            
        </div>
    )
}

export default About