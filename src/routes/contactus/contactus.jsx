import React from 'react'
import './contactus.css'

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>For inquiries, please reach out via the contact details below or use the form provided.</p>
        
        <div className="contact-details">
          <p><strong>Email:</strong> synergz.tech@gmail.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;
