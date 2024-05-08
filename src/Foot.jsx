import React from 'react'

export default function Foot() {
  return (
    <>
      <footer className="footer">
      <div className="form-container">
        <h3>Contact Form</h3>
        <form>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" required />
          </div>
          <button type="submit" className='btnn'>Submit</button>
        </form>
      </div>
      <div className="contact-me">
        <h3>Contact Me</h3>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}
