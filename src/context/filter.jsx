import { createContext } from 'react'

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
  return (
    <FilterContext.Provider value={{
      category: 'all',
      minPrice: 0
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}
