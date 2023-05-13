import { useEffect, useId, useState } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function Cart () {
  const { cart, addToCart, clearCart } = useCart()
  const cartChecBoxId = useId()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const item = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity
    }, 0)

    const total = item.toFixed(2)
    const toNumber = Number(total)
    setTotalPrice(toNumber)
  }, [cart])
  return (
    <>
      <label className='cart-button' htmlFor={cartChecBoxId}>
        🛒
      </label>
      <input hidden id={cartChecBoxId} type='checkbox' className='inputbox' />

      <aside className='cart'>
        <ul>
          {cart.map(product => {
            return (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> {product.price}
                </div>
                <footer>
                  <small>{product.quantity}</small>
                  <button onClick={() => addToCart(product)}>+</button>
                </footer>
              </li>
            )
          })}
        </ul>
        <div className='total'>
          <strong>Total:{totalPrice} </strong>

        </div>
        <button onClick={clearCart}>Clear</button>
      </aside>
    </>
  )
}
export default Cart
