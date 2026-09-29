import Header from "../components/Header"
import Footer from "../components/Footer"
import Categories from "../components/Categories"
import "./WearableTechnology.css"
import tele1 from "../assets/he.png"
import tele2 from "../assets/he2.png"
import tele3 from "../assets/he3.png"
import tele4 from "../assets/he4.png"

import ShopProducts from "../components/ShopProducts"
const WearableTechnology = () => {
   const WearablesArray = [
              {
                id: 1,
                img: tele1,
                info: "Oraimo BoomPop N Wireless Headphones Hybrid Noise...",
                price: "N38,894",
              },
              {
                id: 2,
                img: tele2,
                info: 'Oraimo Necklace Neo Powerful Bass 30hr Playingtime Wireless...',
                price: "N11,522",
              },
              {
                id: 3,
                img: tele3,
                info: 'itel Smart Ring Health Monitor wellness Waterproof - Silver',
                price: "N44,339",
              },
              {
                id: 4,
                img: tele4,
                info: 'Jbl Live 670NC Wireless On-Ear Headphones - True Adaptive Noi...',
                price: "N133,999",
              },
                            
            ];
  return (
    <>
      <Header/>
      <section className="firstSection">
      <section className="secondSection">
      <Categories/>
      <div className="secondInnerSection">
        <div className="WearableTechnologyPage">
          {WearablesArray.map((product)=>{
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

export default WearableTechnology
