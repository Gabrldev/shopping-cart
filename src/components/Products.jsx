import './Products.css'
const Products = ({ products }) => {
  return (
    <section className='products'>
      <ul>
        {products.slice(0, 12).map((pruduct) => (
          <li key={pruduct.id}>
            <img src={pruduct.image} alt={pruduct.title} />
            <h3>{pruduct.title}</h3>
            <p>${pruduct.price}</p>
            <button>Add cart</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Products
