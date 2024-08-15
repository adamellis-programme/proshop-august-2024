import { apiSlice } from './apiSlice' // THIS IS THE PARENT TO THIS API SLICE
import { USERS_URL } from '../constants'
//  ** THIS IS WHAT WE DISPATCH TO **
//  ** THIS IS WHAT WE DISPATCH TO **
//  ** THIS IS WHAT WE DISPATCH TO **

// injecting endpoints so this makes it a child
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // instead of querying (fetch) we
    // are making post and put requests
    // we use MUTATION
    login: builder.mutation({
      // pass in data as we send data to the auth end point
      // -- data will be in this case email / password
      query: (data) => ({
        url: `${USERS_URL}/auth`, // <- data gets sent to this end point
        method: 'POST', // <- specify method
        body: data, // <- body is dat we passed in
      }),
    }),
  }),
})

// as mutation we have to use use Mutation
// NOW WE CAN DISPATCH THIS LOGIN ACTION FROM THE LOGIN SCREEN
export const { useLoginMutation } = usersApiSlice
