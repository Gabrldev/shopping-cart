import Products from './components/Products'
import data from './data/data.json'
import Header from './components/Header'
import { useFilter } from './hooks/useFilter'
import Cart from './components/Cart'
import { CartProvider } from './context/cart'
function App () {
  const { filterProducts } = useFilter()
  const filteredProducts = filterProducts(data)

  return (
    <CartProvider>
      <main>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
      </main>
    </CartProvider>
  )
}

export default App
