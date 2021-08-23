import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="home-div">
            <div className='home-div-container'>
                <h2 className="home-page-text">Welcome to the Marvel Comic Book database!</h2>
                <Link to="/search"><button className="home-button">Get Started</button></Link>
            </div>
        </div>
    );
}

export default Home;