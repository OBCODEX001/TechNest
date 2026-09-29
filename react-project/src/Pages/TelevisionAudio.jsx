import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import ShopProducts from "../components/ShopProducts";
import { TelevisionArrayProduct } from "../JS/ArrayProduct";
import "./TelevisionAudio.css"
const TelevisionAudio = () => {

  return (
    <>
      <Header />
      <section className="firstSection">
        <section className="secondSection">
          <Categories />
          <div className="secondInnerSection">
            <div className="TelevisionPage">
              {TelevisionArrayProduct.map((TelevisionProduct)=>{
                  return <ShopProducts ShopProduct={TelevisionProduct} key={TelevisionProduct.id}/>
                })}
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default TelevisionAudio;
