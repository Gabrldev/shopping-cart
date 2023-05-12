import { useContext } from 'react'
import { FilterContext } from '../context/filter'

export function useFilter () {
  const { filter, setFilter } = useContext(FilterContext)
  function filterProducts (products) {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
          (
            filter.category === 'all' ||
            product.category === filter.category
          )
      )
    })
  }
  return { filterProducts, setFilter, filter }
}
