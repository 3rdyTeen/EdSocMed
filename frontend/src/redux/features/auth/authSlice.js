import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {token: localStorage.getItem('token') ? localStorage.getItem('token') : null },
    reducers:{
        setCredentials: (state, action) => {
            const { token } = action.payload;
            state.token = token;
            localStorage.setItem('token', token);
        },
        setLogout: (state, action) => {
            state.token = null;
            localStorage.removeItem('token');
        }
    }
})

export const { setCredentials, setLogout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;