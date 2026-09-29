import Header from "../components/Header"
import Footer from "../components/Footer"
import Categories from "../components/Categories"
import "./HomeAudio.css"
import { HomeAudioArrayProduct } from "../JS/ArrayProduct"
import ShopProducts from "../components/ShopProducts"
const HomeAudio = () => {
  
  return (
    <div>
      <Header/>
      <section className="firstSection">
      <section className="secondSection">
      <Categories/>
      <div className="secondInnerSection">
        <div className="HomeAudioPage">
        {HomeAudioArrayProduct.map((product)=>{
          return <ShopProducts ShopProduct={product} key={product.id}/>
        })}
        </div>
      </div>
      </section>
    </section>
      <Footer/>
    </div>
  )
}

export default HomeAudio
