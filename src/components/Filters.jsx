import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'

function Filters () {
  const { setFilter, filter } = useFilter()
  const filterId = useId()
  const category = useId()

  const handleChangeMinPrince = (event) => {
    setFilter(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  const handleChangeCategory = (event) => {
    setFilter(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section>
      <div className='filter'>
        <label htmlFor={filterId}>Price</label>
        <input
          type='range'
          id={filterId}
          name='price'
          min='0'
          max='1000'
          step='1'
          onChange={handleChangeMinPrince}
          value={filter.minPrice}
        />
        <span>{filter.minPrice}</span>
      </div>
      <div className='filter'>
        <label htmlFor={category}>Categoria</label>
        <select name='categoria' id={category} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='jewelery'>Jewelery</option>
          <option value='electronics'>Electronics</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="men's clothing">Men's clothing</option>
        </select>
      </div>
    </section>
  )
}
export default Filters
