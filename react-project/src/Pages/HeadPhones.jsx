import Header from "../components/Header"
import Footer from "../components/Footer"
import Categories from "../components/Categories"
import "./HeadPhones.css"
import { HeadPhonesArray } from "../JS/ArrayProduct"
import ShopProducts from "../components/ShopProducts"

const HeadPhones = () => {
   
  return (
    <>
      <Header/>
      <section className="firstSection">
      <section className="secondSection">
      <Categories/>
      <div className="secondInnerSection">
        <div className="HeadPhonesPage">
        {HeadPhonesArray.map((product)=>{
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

export default HeadPhones
