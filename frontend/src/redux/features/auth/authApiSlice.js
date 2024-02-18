import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signup: builder.mutation({
            query: data =>({
                url: 'v1/auth/signup',
                method: 'POST',
                body: { ...data }
            })
        }),
        login: builder.mutation({
            query: credentials => ({
                url: 'v1/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        userLogout: builder.mutation({
            query: () => ({
                url: 'v1/auth/logout',
                method: 'DELETE',
                body: {}
            })
        })
    })
})

export const { useLoginMutation, useSignupMutation, useUserLogoutMutation } = authApiSlice;