import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartUtils'

/**
 * -- createApi is used specifically form api endpoints
 * -- create slice is used specifically for state  (do not  need to use the api)
 */

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' } // obj

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // The item to add to the cart
      const item = action.payload

      // Check if the item is already in the cart (h-o-a-m)
      const existItem = state.cartItems.find((x) => x._id === item._id)

      if (existItem) {
        // If exists, update quantity
        state.cartItems = state.cartItems.map((x) => (x._id === existItem._id ? item : x))
      } else {
        // If not exists, add new item to cartItems
        // not using push as state is immutable
        state.cartItems = [...state.cartItems, item]
      }

      // we return here as we need to use the
      // values such as totalPrice in the global state
      // all around the site
      return updateCart(state)
    },

    removeFromCart: (state, action) => {
      // id is in the action payload
      // Filter out the item to remove from the cart
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload)

      // Update the prices and save to storage
      return updateCart(state)
    },

    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload
      // localStorage.setItem('cart', JSON.stringify(state))
      return updateCart(state)
    },

    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
      return updateCart(state)
    },

    // for when order is completed
    clearCartItems: (state, action) => {
      state.cartItems = []
      return updateCart(state)
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions
// bring into our store file
export default cartSlice.reducer
