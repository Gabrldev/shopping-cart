import { useId } from 'react'
import './Cart.css'

function Cart () {
  const cartChecBoxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartChecBoxId}>
        🛒
      </label>
      <input hidden id={cartChecBoxId} type='checkbox' className='inputbox' />

      <aside className='cart'>
        <ul>
          <li>
            <img src='https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg' alt='' />
            <div>
              <strong>Monitor</strong> $500
            </div>
            <footer>
              <small>Qty:1</small>
              <button>+</button>
            </footer>
          </li>

        </ul>
        <button>Clear</button>
      </aside>
    </>
  )
}
export default Cart
