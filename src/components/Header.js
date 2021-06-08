import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="Header">
            <div className="NavigationItem">
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>

            </div>
        </div>
    )
}
export default Header