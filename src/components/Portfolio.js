import React from 'react';
import './SectionStyles.css'; // Importing shared styles for all sections

// Importing images from src/assets directory
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project13.jpg';  // Double check spelling and existence


const Portfolio = () => {
  return (
    <section id="portfolio-section" className="section">
      <h2>Our Portfolio</h2>
      <p>Take a look at some of the projects we've completed for our happy clients.</p>
      <div className="portfolio-gallery">
        {/* Project Thumbnails or Descriptions */}
        <div className="portfolio-item">
          <img src={project1} alt="Project 1" />
          <p>Project 1 - E-commerce website for a retail brand</p>
        </div>
        <div className="portfolio-item">
          <img src={project2} alt="Project 2" />
          <p>Project 2 - Custom CRM application for a client</p>
        </div>
        <div className="portfolio-item">
          <img src={project3} alt="Project 3" />
          <p>Project 3 - Portfolio website for an artist</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
