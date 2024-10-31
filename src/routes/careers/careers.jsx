import React from 'react';
import './careers.css';

const careersData = [
  {
    title: 'Web Development',
    description: 'Looking for talented web developers to design, build, and maintain responsive, high-performance websites and applications. Collaborate with cross-functional teams to deliver impactful digital solutions.'
  },
  {
    title: 'Mobile App Development',
    description: 'Join our team as a mobile app developer to create user-friendly, innovative mobile applications. Work on both iOS and Android platforms and bring ideas to life in a fast-paced environment.'
  },
  {
    title: 'Data Analysis',
    description: 'We seek data analysts to transform complex data into actionable insights. Support projects by analyzing trends, creating visualizations, and helping drive data-driven decisions.'
  },
  {
    title: 'Machine Learning/AI',
    description: 'Seeking AI and Machine Learning experts to design and implement intelligent solutions. Tackle challenging problems and contribute to advancing our technological capabilities.'
  },
  {
    title: 'Marketing/Branding',
    description: 'Join our marketing team to develop and execute strategies that increase brand awareness and engagement. Use digital marketing, content creation, and analytics to grow our audience.'
  },
  {
    title: 'UI/UX Design',
    description: 'We are seeking creative UI/UX designers to craft exceptional user experiences. Collaborate with product teams to design intuitive interfaces and enhance overall user satisfaction.'
  },
  {
    title: 'Content Creation',
    description: 'Looking for content creators to develop high-quality, engaging content across various platforms. Contribute to storytelling, marketing, and brand-building efforts to reach a wide audience.'
  },
  {
    title: 'Project Management',
    description: 'Seeking project managers to lead cross-functional teams, plan projects, and ensure timely delivery. Coordinate resources, manage budgets, and maintain project alignment with business goals.'
  },
  {
    title: 'Mentorship Skills for JEE/NEET',
    description: 'Join us as a mentor for JEE/NEET aspirants. Provide guidance, study strategies, and motivational support to help students achieve academic success in their competitive exams.'
  }
]


const Careers = () => {
  const applicationLink = 'https://docs.google.com/forms/d/e/1FAIpQLSe9zLNf0xYwbamJGgbKGrNqrre5tAoTNFQH2cjj8mVYpIIWFQ/viewform';
  return (
    <div className="careers">
      <div className="careers-container">
        <h1>Careers at Synergz</h1>
        <p id='first'>Join our innovative team and help us shape the future of technology. We offer a variety of positions for talented individuals looking to make a difference.</p>
        {careersData.map((career, index) => (
          <div key={index} className="career-item">
            <h2>{career.title}</h2>
            <p>{career.description}</p>
            <a href={applicationLink} className="apply-button">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;
