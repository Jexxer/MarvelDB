import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="home-div">
            <div>
                <h2>Welcome to my site!</h2>
                <Link to="/search"><button className="home-button">Get Started</button></Link>
            </div>
        </div>
    );
}

export default Home;