import React from 'react';
import './services.css';

const servicesData = [
  {
    title: 'Project Development',
    description: 'We specialize in developing innovative projects tailored to meet the unique needs of our clients, ensuring timely delivery and quality results.',
    icon:'./project-management.png'
  },
  {
    title: 'Consulting',
    description: 'Our consulting services provide expert guidance in business strategy, technology implementation, and operational efficiency, helping clients achieve their goals.',
    icon:'./conversation.png'
  },
  {
    title: 'Market Research',
    description: 'We conduct comprehensive market research to identify opportunities and challenges, enabling informed decision-making for our clients.',
    icon:'./market.png'
  },
  {
    title: 'Product Design',
    description: 'Our team designs user-centric products that are both functional and visually appealing, enhancing user experience and engagement.',
    icon:'./cubes.png'
  },
  {
    title: 'Digital Marketing',
    description: 'We offer digital marketing solutions that include SEO, social media management, and content creation to help clients reach their target audience effectively.',
    icon:'./social-media.png'
  },
];

const Services = () => {
  return (
    <div className="services fade-in">
      <div className="services-container">
        <h1>Our Services</h1>
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <div className="header">
              <h2>{service.title}</h2>
              <img src={service.icon} alt={`${service.title} Icon`} className="service-icon" />
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
