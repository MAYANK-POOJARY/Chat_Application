import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLoading: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setIsLoading, setUser } = authSlice.actions;
export default authSlice.reducer