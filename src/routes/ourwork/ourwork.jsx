import React from 'react';
import './ourwork.css';

const projects = [
  {
    title: 'Project A',
    description: 'A platform for streamlining workflow automation for startups.',
    techStack: 'React, Node.js, MongoDB, Express.js',
    icon: '/workflow.png', 
  },
  {
    title: 'Project B',
    description: 'A mobile app for real-time analytics and reporting for businesses.',
    techStack: 'Flutter, Firebase, TensorFlow',
    icon: '/analysis.png', 
  },
  {
    title: 'Project C',
    description: 'A cutting-edge AI solution for image recognition and classification.',
    techStack: 'Python, PyTorch, OpenCV, AWS',
    icon: '/face-id.png', 
  },
  {
    title: 'Project D',
    description: 'A web application for seamless e-commerce management.',
    techStack: 'Angular, MySQL, Docker',
    icon: '/shopping.png', 
  },
  {
    title: 'Project E',
    description: 'A tool for predictive analytics in customer behavior.',
    techStack: 'R, Tableau, Spark, AWS',
    icon: '/predictive.png', 
  },
  {
    title: 'Project F',
    description: 'A blockchain-based solution for secure digital transactions.',
    techStack: 'Ethereum, Solidity, Web3.js, IPFS',
    icon: '/blockchain.png', 
  }
];


const OurWork = () => {
  return (
    <div className="our-work">
      <h1>Our Work</h1>
      <p className="intro">
        At Synergz, we are proud of the innovative projects we undertake. Here is a showcase of some of our completed and ongoing projects.
      </p>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.icon} alt={`${project.title} Icon`} className="project-icon" />
            <h2>{project.title}</h2>
            <p className="description">{project.description}</p>
            <p className="tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
