import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import HeadPhones from "../assets/HeadPhone.png"
import appliances from "../assets/HomeAppliances.png"
import accessories from "../assets/Accessories.png"
import TeleAudio from "../assets/TeleAud.png"
import HomeAudio from "../assets/HomeAudio.png"
import Wearables from "../assets/Wearable.png"
// import slideOne from "../assets/1.png"
// import slideTwo from "../assets/2.png"
// import slideThree from "../assets/3.png"
// import Carousel from "../components/Carousel"
import "./Shop.css"
import Categories from "../components/Categories"



const Shop = () => {
  // const shopSlides = [
  //   { image: slideOne, alt: "Tech deals banner" },
  //   { image: slideTwo, alt: "Premium accessories banner" },
  //   { image: slideThree, alt: "New arrivals banner" },
  // ];

  const shopCategories = [
    {
      id: 1,
      name: "Headphones",
      image: HeadPhones,
      description: "Premium audio experience with quality headphones",
      count: "8+ Products",
      path: "/Shop/HeadPhones"
    },
    {
      id: 2,
      name: "Wearables",
      image: Wearables,
      description: "Smartwatches and fitness trackers for active lifestyle",
      count: "4+ Products",
      path: "/Shop/WearableTechnology"
    },
    {
      id: 3,
      name: "Home Audio",
      image: HomeAudio,
      description: "Speakers and audio systems for your home",
      count: "8+ Products",
      path: "/Shop/HomeAudio"
    },
    {
      id: 4,
      name: "Television & Audio",
      image: TeleAudio,
      description: "Latest TVs and premium audio equipment",
      count: "8+ Products",
      path: "/Shop/TelevisionAudio"
    },
    {
      id: 5,
      name: "Home Appliances",
      image: appliances,
      description: "Smart home devices and appliances",
      count: "8+ Products",
      path: "/Shop/HomeAppliances"
    },
    {
      id: 6,
      name: "Accessories & Supplies",
      image: accessories,
      description: "All tech accessories you need",
      count: "8+ Products",
      path: "/Shop/AccessoriesSupplies"
    }
  ]

  return (
    <>
      <Header/>
      <section className="shopBanner">
        <div className="shopBannerContent">
          <h1>Welcome to Our Shop</h1>
          <p>Discover thousands of premium tech products at unbeatable prices</p>
        </div>
      </section>

      <section className="shopMainContent">
        <section className="shopContainer">
          <Categories/>
          <div className="shopContentArea">
            {/* <div className="shopCarouselWrap">
              <Carousel slides={shopSlides} autoPlayMs={4000} />
            </div> */}
            <div className="shopIntroSection">
              <h2>Select a Category to Shop</h2>
              <p>Browse through our extensive collection of tech products and find exactly what you need.</p>
            </div>
            
            <div className="categoryListGrid">
              {shopCategories.map((category) => (
                <div key={category.id} className="categoryListCard">
                  <div className="categoryListImage">
                    <img src={category.image} alt={category.name} />
                  </div>
                  <h3>{category.name}</h3>
                  <p className="categoryDescription">{category.description}</p>
                  <p className="productCount">{category.count}</p>
                  <Link to={category.path} style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <button className="shopCategoryBtn">Explore</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <Footer/>
    </>
  )
}

export default Shop
