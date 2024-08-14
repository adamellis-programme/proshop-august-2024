// property is a key value pair
// this is the parent to the rest of the slices we create
// BOILOR PLATE
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../slices/apiSlice'
// we don't have to have a reducer we bring into the store
// as we are using the api slice [computed property vlaues]
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

/**
 * getDefaultMiddleware : redux-thunk etc
 * .concat(apiSlice.middleware: caching, invalidation, polling, and optimistic updates that Redux Toolkit Query provides. By using concat, you're adding this API-specific middleware to the default middleware set.
 *  mutations: requests: CRUD
 */
