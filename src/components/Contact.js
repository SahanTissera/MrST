import React from 'react';
import './SectionStyles.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Left Side - Address and Google Map */}
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Mr ST <br /> No 11, Temple Lane,<br />School Road, Wadduwa, <br /> Sri Lanka</p>
          <p>Email: contact@sahantissera.com</p>
          <p>Phone: (123) 456-7890</p>
          {/* Embed Google Map */}
          <div className="google-map">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.862507530512!2d79.93314697581715!3d6.663955721513501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae249dc0226e96b%3A0x9b5b5c796318b9f7!2sMr.ST!5e0!3m2!1sen!2snz!4v1733430857214!5m2!1sen!2snz"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="contact-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
