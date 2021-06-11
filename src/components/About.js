import React from 'react'
import Me from '../Images/Me.jpeg'
import { Link } from 'react-router-dom'
import './About.css'
import { Table } from 'react-bootstrap'

function About() {
    return (
        <>
        <Table>
            <tr>
                <th>
                    <img
                        width={200}
                        height={250}
                        src={Me}
                        alt="Profile Picture"
                    />
                </th>
                <th>
                    <p>
                        I am a Software Engineer based out of San Francisco, CA with a background in the legal field.    
                    </p>
                </th>
            </tr>
        </Table>
        <div>
            <p>Interested in learning more?</p>
            <a href="https://www.linkedin.com/in/jenmiao" target="_blank" class="orangebutton linkedin w-button">LinkedIn</a>
        </div>
        </>
    )
}

export default About