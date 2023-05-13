import './Products.css'
import { useCart } from '../hooks/useCart'
const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart()
  console.log(cart)

  const checkProduct = (product) => {
    return cart.some((item) => item.id === product.id)
  }
  return (
    <section className='products'>
      <ul>
        {products.slice(0, 12).map((product) => {
          const isProductInCart = checkProduct(product)
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button
                onClick={() =>
                  isProductInCart ? removeFromCart(product) : addToCart(product)}
              >
                {isProductInCart ? 'remove cart' : 'add cart'}
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default Products
