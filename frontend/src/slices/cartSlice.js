import { createSlice } from '@reduxjs/toolkit'

/**
 * -- createApi is used specifically form api endpoints
 * -- create slice is used specifically for state  (do not  need to use the api)
 */

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] } // obj with cartItems: []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

// bring into our store file
export default cartSlice.reducer
