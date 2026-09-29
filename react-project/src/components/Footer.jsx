import { Link } from "react-router-dom"
import "../components/Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="innerFooterContainer">
            <div className="firstFooterSection">
                <div>
                    <h1>Join Our Newsletter</h1>
                    <p>Get the latest deals & updates</p>
                </div>
                <div className="inputContainer">
                    <input type="email" placeholder="Enter your Email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="secondFooterSection">
                <div className="firstInnerSecondSection">
                    <h1>Quick Links</h1>
                    <Link to="/Shop">
                    <p>Shop</p>
                    </Link>
                    <Link to="/Best-Sellers">
                    <p>Best Sellers</p>
                    </Link>
                    <Link to="/About">
                    <p>About Us</p>
                    </Link>
                    <Link to="/Contact">
                    <p>Contact</p>
                    </Link>
                </div>
                <div className="secondInnerSecondSection">
                    <h1>Customer Service</h1>
                    <p>Shipping info</p>
                    <p>Return policy</p>
                </div>
                <div className="thirdInnerSecondSection">
                    <h1>Follow us: </h1>
                    <p>&copy; 2026 TechNest. All Rights Reserved</p>
                </div>
                <div className="fourthInnerSecondSection">
                    <a href="https://www.facebook.com/TechNest" target="_blank">
                <FaFacebook className="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/TechNest" target="_blank">
                <FaInstagram className="instagram"/>
                    </a>
                    <a href="https://www.twitter.com/TechNest" target="_blank">
                <FaTwitter className="twitter"/>
                    </a>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}
