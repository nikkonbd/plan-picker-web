
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: [],
        isAuthenticated: false,
        isLoading: true
    },
    reducers: {
        userCreated: (state, action) => {

            state.user.push(action.payload)
            state.isAuthenticated = true;
            state.isLoading = true
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false
        },
    },
});

export const { userCreated, logout } = userSlice.actions;

export default userSlice.reducer;


export const handleUserCreation = async (user) => {

    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, user);
        console.log(user);
        const newUser = response.data;
        console.log(newUser, response)
        dispatch(userCreated(user));

    } catch (error) {
        console.error('Error creating user:', error);
    }
};