import { useState, useId } from 'react'

function Filters ({ changeFilter }) {
  const [minPrince, setMinPrince] = useState(0)

  const filterId = useId()
  const category = useId()

  const handleChangeMinPrince = (event) => {
    setMinPrince(event.target.value)
    changeFilter(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  const handleChangeCategory = (event) => {
    changeFilter(prevState => ({
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
        />
        <span>{minPrince}</span>
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
