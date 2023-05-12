import { useState } from 'react'
import Products from './components/Products'
import data from './data/data.json'
import Header from './components/Header'
import { useFilter } from './hooks/useFilter'
import Footer from './components/Footer'
function App () {
  const [products] = useState(data)
  const { filterProducts, setFilter } = useFilter()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilter={setFilter} />
      <main>
        <Products products={filteredProducts} />
      </main>
      <Footer />
    </>
  )
}

export default App
