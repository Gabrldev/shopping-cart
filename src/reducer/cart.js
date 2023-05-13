
// local storage
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART:{
      const { id } = actionPayload
      const productInCart = state.findIndex(product => product.id === id)
      if (productInCart >= 0) {
        const newState = [...state]
        newState[productInCart].quantity += 1
        updateLocalStorage(newState)
        return newState
      }
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART:{
      const { id } = actionPayload
      const newState = state.filter(product => product.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case CART_ACTION_TYPES.CLEAR_CART:{
      updateLocalStorage([])
      return []
    }
  }
  return state
}
