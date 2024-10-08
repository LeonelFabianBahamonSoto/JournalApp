import { createSlice } from '@reduxjs/toolkit';

interface Auth {
    displayName: string,
    email: string,
    errorMessage: string,
    photoUrl: string,
    status: string,
    uid: string,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        displayName: null,
        email: null,
        errorMessage: null,
        photoUrl: null,
        status: 'not-authenticated', // 'checking' || 'authenticated' || false,
        uid: null,
    },
    reducers: {
            login: ( state, action ) => {
                state.displayName = action.payload.displayName;
                state.email = action.payload.email;
                state.errorMessage = null;
                state.photoUrl = action.payload.photoURL;
                state.status = 'authenticated';
                state.uid = action.payload.uid;
            },
            logout: ( state, { payload } ) => {
                state.displayName = null;
                state.email = null;
                state.errorMessage = payload;
                state.photoUrl = null;
                state.status = 'not-authenticated';
                state.uid = null;
            },
            checkingCredentials: ( state ) => {
                state.status = 'checking';
            },
    }
});

// Action creators are generated for each case reducer function
export const {
    checkingCredentials,
    login,
    logout,
} = authSlice.actions;