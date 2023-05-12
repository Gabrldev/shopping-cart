import './Products.css'
import { useCart } from '../hooks/useCart'
const Products = ({ products }) => {
  const { addCart, cart } = useCart()
  console.log(cart)
  return (
    <section className='products'>
      <ul>
        {products.slice(0, 12).map((pruduct) => (
          <li key={pruduct.id}>
            <img src={pruduct.image} alt={pruduct.title} />
            <h3>{pruduct.title}</h3>
            <p>${pruduct.price}</p>
            <button onClick={() => addCart(pruduct)}>Add cart</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Products
