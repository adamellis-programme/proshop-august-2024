import { PRODUCTS_URL, UPLOAD_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      // ask where do the tags come from
      providesTags: ['Product'], // may have to refresh the page if not
      keepUnusedDataFor: 5,
    }),
    // Add this endpoint
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    // -- create new product
    createProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: 'POST',
      }),
      // makes sure we have fresh data stops caching
      invalidatesTags: ['Product'],
    }),
    //-- update new product as admin
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data._id}`,
        method: 'PUT',
        body: data,
      }),
      // clear the cache so we get upto date data
      // we provided the tag on get data and we tell it not to chache here
      invalidatesTags: ['Product'],
    }),

    //-- upload img route
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    // delete product
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
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

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
} = productsApiSlice
/**
 * no fetch request or axios to make req
 * all done through redux toolkit
 *
 * uses RTK QUERY behinds the scenes
 *
 */
