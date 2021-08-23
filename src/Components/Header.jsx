import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/Marvel_Studios_2016_logo.svg'


function Header(props) {
    return (
        <div className="header">
            <Link to="/"><img src={logo} alt="Marvel Logo" className="logo"/></Link>
            <div className="nav">
                <Link to="/" className="nav-links">Home</Link>
                <Link to="/search" className="nav-links">Search</Link>
                <a className="nav-links" href="https://github.com/Jexxer" target="_blank">Github</a>
            </div>
        </div>
    );
}

export default Header;