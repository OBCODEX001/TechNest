import Header from "../components/Header"
import Footer from "../components/Footer"
import Categories from "../components/Categories"
import ShopProducts from "../components/ShopProducts"
import "./AccessoriesSupplies.css"
import { AccessoriesArrayProduct } from "../JS/ArrayProduct"
const AccessoriesSupplies = () => {
  return (
    <>
     <Header/>
     <section className="firstSection">
      <section className="secondSection">
      <Categories/>
      <div className="secondInnerSection">
      <div className="accessoriesPage">
        {AccessoriesArrayProduct.map((product)=>{
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

export default AccessoriesSupplies
