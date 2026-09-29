import Header from "../components/Header"
import Footer from "../components/Footer"
import Categories from "../components/Categories"
import "./HomeAppliances.css"
import { HomeAppliancesArray } from "../JS/ArrayProduct"
import ShopProducts from "../components/ShopProducts"
const HomeAppliances = () => {
   
  return (
    <>
     <Header/>
     <section className="firstSection">
      <section className="secondSection">
      <Categories/>
      <div className="secondInnerSection">
        <div className="HomeAppliancesPage">
        {HomeAppliancesArray.map((product)=>{
          return <ShopProducts ShopProduct={product} key={product.id}/>
        })}
        </div>
      </div>
      </section>
    </section>
     <Footer/> 
    </>
  )
}

export default HomeAppliances
