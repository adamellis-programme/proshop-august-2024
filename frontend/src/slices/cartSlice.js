import { createSlice } from '@reduxjs/toolkit'

/**
 * -- createApi is used specifically form api endpoints
 * -- create slice is used specifically for state  (do not  need to use the api)
 */

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] } // obj with cartItems: []

// helper function
const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}
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

      // Calculate the items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )

      // Calculate the shipping price | If items price is greater than 100, shipping is free | If not, shipping is 10
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

      // Calculate the tax price | Tax is 15% of the items price
      // make sure it is a number
      state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))

      // Calculate the total price | Total price is the sum of the items price, shipping price and tax price / everything formated as a number
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2)

      // Save the cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})
export const { addToCart } = cartSlice.actions
// bring into our store file
export default cartSlice.reducer
