import { apiSlice } from './apiSlice' // THIS IS THE PARENT TO THIS API SLICE
import { USERS_URL } from '../constants'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`, // <- data gets sent to this end point
        method: 'POST', // <- specify method
        body: data, // <- body is dat we passed in
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),

    // // will destroy the cookie on the backend
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = usersApiSlice
