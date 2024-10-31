import React from 'react'
import './homepage.css'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home">
          <div className="intro-section">
            <h1>Welcome to Synergz</h1>
            <p>
              We are a team dedicated to building innovative startups, connecting
              talent, and delivering customized client solutions.
            </p>
            <div className="cta-buttons">
              <NavLink to="/ourwork" className="btn btn-primary">View Our Work</NavLink>
              <NavLink to="/contactus" className="btn btn-secondary">Join us</NavLink>
            </div>
          </div>
        </div>
      );
}

export default HomePage;