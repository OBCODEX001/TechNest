import Header from '../components/Header'
import Footer from '../components/Footer'
import "./Cart.css"
import { useCart } from '../context/useCart'

const Cart = () => {
    const { cartItems, removeFromCart } = useCart()
  return (
    <>
    <Header/>
    <div className='cartPage'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((product) => (
          <div className="Card" key={`${product.id}-${product.img}`}>
            <div className="CardImageContainer">
              <img src={product.img} alt={product.info} />
            </div>
            <div className="CardInfo">
              <p>{product.info}</p>
              <h1>{product.price}</h1>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
    <Footer/>
      
    </>
  )
}

export default Cart
