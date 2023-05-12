import Filters from './Filters'

function Header ({ changeFilter }) {
  return (
    <header>
      <h1>Shopping cart 🛒</h1>
      <Filters changeFilter={changeFilter} />
    </header>
  )
}
export default Header
