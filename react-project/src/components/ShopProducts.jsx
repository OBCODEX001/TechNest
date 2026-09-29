import "./ShopProducts.css"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/useCart"

const ShopProducts = ({ ShopProduct }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(ShopProduct)
    navigate("/Cart")
  }

  return (
    <>
      <div className="ShopCard">
        <div className="ShopCardImageContainer">
            <img src={ShopProduct.img} alt="" />
        </div>
        <div className="ShopCardInfo">
            <p>{ShopProduct.info}</p>
            <h1>{ShopProduct.price}</h1>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </>
  )
}

export default ShopProducts
