import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import { products } from "../JS/ArrayProduct"
import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
import { categories } from "../JS/ArrayProduct"
import { testimonials } from "../JS/ArrayProduct"
import './HomePage.css'
export default function HomePage() {

  return (
    <>
        <Header/>
        <div className="heroSection">
            <div className="leftHeroContainer">
                <div className="leftHeroText">
                <h1>
                     <Typewriter
                        words={['Top Tech Gear', 'Smart Wearables', 'Wireless Audio', 'Next-Gen Gadgets', 'Premium Accessories', 'Everyday Essentials']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h1>
                <h2>for Your Lifestyle</h2>
                <p>Explore the latest gadgets & accessories.</p>
                </div>
                <Link to="/Shop"><button>Shop Now</button></Link>
            </div>
        </div>

        <div className="benefitsSection">
          <div className="benefitsContainer">
            <div className="benefitCard">
              <span className="benefitIcon">✓</span>
              <h3>Free Shipping</h3>
              <p>On orders over N50,000</p>
            </div>
            <div className="benefitCard">
              <span className="benefitIcon">✓</span>
              <h3>Authentic Products</h3>
              <p>100% genuine & original</p>
            </div>
            <div className="benefitCard">
              <span className="benefitIcon">✓</span>
              <h3>Secure Payment</h3>
              <p>Safe & encrypted transactions</p>
            </div>
            <div className="benefitCard">
              <span className="benefitIcon">✓</span>
              <h3>24/7 Support</h3>
              <p>Always here to help</p>
            </div>
          </div>
        </div>

        <div className="categoriesSection">
          <div className="categoriesContainer">
            <h2>Shop by Category</h2>
            <div className="categoriesGrid">
              {categories.map((category, index) => (
                
                <div key={index} className="categoryCard">
                  <div className="categoryImage">
                    <img src={category.image} alt={category.index} />
                  </div>
                  <Link to={category.path}><p>{category.name}</p></Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="featuredProducts">
        <div className="featuredInner">
        <div className="feauredHeader">
            <hr />
            <h1>Featured Products</h1>
            <hr />
        </div>
        <div className="featuredProductContainer">
        {products.map((product)=>{
            return <ProductCard product={product} key={product.id}/>
            
        })}
        </div>
        </div>
        </div>

        <div className="testimonialsSection">
          <div className="testimonialsContainer">
            <h2>What Our Customers Say</h2>
            <div className="testimonialsGrid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonialCard">
                  <div className="rating">{"⭐".repeat(testimonial.rating)}</div>
                  <p className="testimonialText">"{testimonial.text}"</p>
                  <p className="testimonialName">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ctaSection">
          <div className="ctaContent">
            <h2>Ready to Upgrade Your Tech?</h2>
            <p>Discover thousands of amazing tech products at unbeatable prices</p>
            <Link to="/Shop"><button className="ctaButton">Explore All Products</button></Link>
          </div>
        </div>
        
        <Footer/>      
    </>
  )
}
