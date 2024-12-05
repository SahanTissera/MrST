import React from 'react';
import './SectionStyles.css';

const Services = () => {
  return (
    <section id="services-section" className="services-section">
      <h2>Our Services</h2>
      <div className="service-card">
        <h3>Web Development</h3>
        <p>Custom-built websites that meet your business needs with a focus on functionality and design.</p>
      </div>
      <div className="service-card">
        <h3>IT Consulting</h3>
        <p>Expert advice on technology strategies to grow and streamline your business operations.</p>
      </div>
      <div className="service-card">
        <h3>E-commerce Solutions</h3>
        <p>Scalable and secure platforms to help you sell your products online effortlessly.</p>
      </div>
    </section>
  );
};

export default Services;
