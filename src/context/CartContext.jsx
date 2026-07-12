import { createContext, useContext, useReducer, useMemo } from 'react'

const CartContext = createContext(null)

const initialState = {
  items: [], // { product, quantity }
  isOpen: false,
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.product.id === action.product.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          isOpen: true,
        }
      }
      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: 1 }],
        isOpen: true,
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.product.id !== action.id),
      }
    case 'SET_QUANTITY': {
      if (action.quantity < 1) {
        return {
          ...state,
          items: state.items.filter((i) => i.product.id !== action.id),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.id ? { ...i, quantity: action.quantity } : i
        ),
      }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'OPEN_CART':
      return { ...state, isOpen: true }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const value = useMemo(() => {
    const subtotal = state.items.reduce(
      (sum, i) => sum + i.product.price * i.quantity,
      0
    )
    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)

    return {
      items: state.items,
      isOpen: state.isOpen,
      subtotal,
      itemCount,
      addItem: (product) => dispatch({ type: 'ADD_ITEM', product }),
      removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', id }),
      setQuantity: (id, quantity) =>
        dispatch({ type: 'SET_QUANTITY', id, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      openCart: () => dispatch({ type: 'OPEN_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
