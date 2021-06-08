import React from 'react'
import About from './About'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="home-page">
            <h1 className="abouth1">
                <Link to='/'>JENNIFER MIAO</Link> | Software Engineer 
            </h1>
            <About />
        </div>
    )
}
export default Home;