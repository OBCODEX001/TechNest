import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find(
        (item) => item.id === product.id && item.img === product.img
      )

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id && item.img === product.img
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...items, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (product) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== product.id || item.img !== product.img)
    )
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}