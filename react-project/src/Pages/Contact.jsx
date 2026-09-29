import Header from "../components/Header"
import Footer from "../components/Footer"
import "./Contact.css"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <>
      <Header/>
      <section className="contactBanner">
        <div className="contactBannerContent">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>
      </section>

      <section className="contactContainer">
        <div className="contactContent">
          <div className="contactInfo">
            <div className="infoBox">
              <h3>📍 Location</h3>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="infoBox">
              <h3>📞 Phone</h3>
              <p>+234 (123) 456-7890</p>
            </div>
            <div className="infoBox">
              <h3>✉️ Email</h3>
              <p>support@technest.com</p>
            </div>
            <div className="infoBox">
              <h3>🕐 Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM</p>
            </div>
          </div>

          <form className="contactForm" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            <div className="formGroup">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="your@email.com" required />
            </div>
            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What is this about?" required />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
            </div>
            <button type="submit" className="submitBtn">Send Message</button>
          </form>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Contact
