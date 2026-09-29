import Header from "../components/Header"
import Footer from "../components/Footer"
import "./About.css"

const About = () => {
  return (
    <>
      <Header/>
      <section className="aboutBanner">
        <div className="aboutBannerContent">
          <h1>About TechNest</h1>
          <p>Your trusted destination for premium tech</p>
        </div>
      </section>

      <section className="aboutContainer">
        <div className="aboutContent">
          <div className="aboutSection">
            <h2>Who We Are</h2>
            <p>
              TechNest is your one-stop destination for cutting-edge technology and gadgets. 
              Founded in 2020, we've been dedicated to bringing the latest and greatest tech 
              products to customers across Nigeria.
            </p>
          </div>

          <div className="aboutSection">
            <h2>Our Mission</h2>
            <p>
              We believe technology should be accessible to everyone. Our mission is to provide 
              high-quality, affordable tech products with exceptional customer service and support.
            </p>
          </div>

          <div className="aboutSection">
            <h2>Why Choose Us</h2>
            <ul>
              <li>✓ Authentic products from trusted brands</li>
              <li>✓ Competitive pricing and exclusive deals</li>
              <li>✓ Fast and reliable shipping</li>
              <li>✓ 100% customer satisfaction guarantee</li>
              <li>✓ Expert customer support team</li>
            </ul>
          </div>

          <div className="aboutSection">
            <h2>Our Values</h2>
            <p>
              <strong>Quality:</strong> We only stock products that meet our high standards.<br/>
              <strong>Integrity:</strong> We are transparent and honest in all our dealings.<br/>
              <strong>Innovation:</strong> We constantly update our inventory with the latest tech.
            </p>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default About
