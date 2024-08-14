// parent to the other api slices

/**
 * createSlice for non async we are working with createApi as backend
 * fetchBase will allow us to make request
 * tag types are uses to define the types of data we fetch from the api
 *
 */

import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
})
