import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, setLogout } from '../auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8800/api',
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token;

        if(token) headers.set('authorization', `Bearer ${token}`)

        return headers
    }
})


const query = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403)
        api.dispatch(logOut())

    return result;
}

export const apiSlice = createApi({
    baseQuery: query,
    endpoints: builder => ({})
})