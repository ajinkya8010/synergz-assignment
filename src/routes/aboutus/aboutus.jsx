import React from 'react';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us fade-in">
      <div className="about-us-container">
        <h1>About Synergz</h1>
        <p>
          At Synergz, we are a dynamic team committed to building innovative startup projects, hiring top talent, and providing tailored solutions for clients based on their unique requirements.
        </p>
        
        <section className="section">
          <h2>Our Core Values</h2>
          <p>
            Innovation, Collaboration, and Integrity are at the heart of what we do. We believe in creating an environment where creativity thrives, teamwork drives success, and transparency builds trust.
          </p>
        </section>
        
        <section className="section">
          <h2>Our Goals</h2>
          <p>
            Our mission is to empower startups with the resources they need to succeed, connect skilled professionals with exciting opportunities, and deliver value-driven solutions that meet our clients' demands.
          </p>
        </section>

        <section className="section">
          <h2>Our Expertise</h2>
          <p>
            Our team brings expertise in technology, product development, business strategy, and client services, enabling us to tackle diverse projects with precision and professionalism.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
