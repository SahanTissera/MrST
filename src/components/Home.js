import React, { useEffect } from 'react';
import './HomeStyles.css'; // CSS for the Home page styling
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS

// Importing images from src/assets directory
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const Home = () => {
  useEffect(() => {
    // Scroll listener to add/remove the shadow effect on the navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-wrapper">
      {/* Navbar Section */}
      <header className="navbar">
        <div className="navbar-logo">
          <a href="#home-section">My IT Solutions</a> {/* Make company name clickable */}
        </div>
        <nav className="navbar-links">
          <ul>
            <li><a href="#services-section">Services</a></li>
            <li><a href="#portfolio-section">Portfolio</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Carousel Banner Section */}
      <div id="home-section" className="carousel-banner">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src={image1} alt="Banner Image 1" />
            <p className="legend">Web Development Services</p>
          </div>
          <div>
            <img src={image2} alt="Banner Image 2" />
            <p className="legend">IT Consulting Solutions</p>
          </div>
          <div>
            <img src={image3} alt="Banner Image 3" />
            <p className="legend">E-commerce Solutions</p>
          </div>
        </Carousel>
      </div>

      {/* Services, Portfolio, and Contact Sections */}
      <div id="services-section" className="content-section">
        <Services />
      </div>

      <div id="portfolio-section" className="content-section">
        <Portfolio />
      </div>

      <div id="contact-section" className="content-section">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
