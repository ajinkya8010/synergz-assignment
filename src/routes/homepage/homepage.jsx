import React from 'react'
import './homepage.css'

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
              <a href="/ourwork" className="btn btn-primary">View Our Work</a>
              <a href="/contactus" className="btn btn-secondary">Join Us</a>
            </div>
          </div>
        </div>
      );
}

export default HomePage;