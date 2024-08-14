import { PRODUCTS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    // Add this endpoint
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
})

/**
 *  export with convention
 *      -- prefixed witn use append Query
 *      -- when it's a mutation we use mutation
 *
 */
// we export the query so we can use it in the pages like the home screen

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice
/**
 * no fetch request or axios to make req
 * all done through redux toolkit
 *
 * uses RTK QUERY behinds the scenes
 *
 */
