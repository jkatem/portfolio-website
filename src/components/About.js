import React from 'react'
import Me from '../Images/Me.jpeg'
import Me1 from '../Images/Me1.jpeg'
import './About.css'
import { Table } from 'react-bootstrap'

function About() {
    return (
        <>
        <Table>
            <tr>
                <th>
                    <img
                         src={Me} alt="Profile"
                    />
                </th>
                <th>
                    <p> I am a Software Engineer based out of San Francisco, CA with a background in the legal field. I am passionate about solving problems and critically thinking.</p>
                    <p>On my free time I like to take photos of my dog, beach, and food, and play with the colors. </p>    
                </th>
            </tr>
            <tr>
                <th>
                    <p>blah blah blah</p>
                </th>
                <th>
                    {/* maybe have the pictures built with React Bootstrap Individual item intervals */}
                    <img src={Me1} alt="profile"/>
                </th>
            </tr>
        </Table>
        
        </>
    )
}

export default About