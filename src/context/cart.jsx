import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  // cuando hay algo en el carrito
  const addCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id)
    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      setCart(newCart)
    }
    // cuando no hay nada en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeCart = (product) => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  )
}
