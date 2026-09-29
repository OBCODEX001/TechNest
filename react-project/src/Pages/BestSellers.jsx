import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import { bestSellerProducts } from "../JS/ArrayProduct"
import "./BestSellers.css"

const BestSellers = () => {
  

  return (
    <>
      <Header/>
      <section className="bestSellersBanner">
        <div className="bannerContent">
          <h1>Our Best Sellers</h1>
          <p>Discover the products loved by thousands of customers</p>
        </div>
      </section>
      
      <section className="bestSellersContainer">
        <div className="bestSellersHeader">
          <h2>Top Rated Products</h2>
          <p>Premium tech at unbeatable prices</p>
        </div>
        <div className="bestSellersGrid">
          {bestSellerProducts.map((product) => {
            return <ProductCard product={product} key={product.id}/>
          })}
        </div>
      </section>
      
      <Footer/>
    </>
  )
}

export default BestSellers
