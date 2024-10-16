import { registerUser, signInWithCredentials } from "../../firebase/providers";
import { saveNewAuth } from "../../helper/localStorage";

import { AppDispatch } from "../store";

import { checkingCredentials, login, logout } from "./authSlice";

interface RegisterData {
    displayName?: string,
    email: string,
    password: string,
};

export const checkingAuthentication = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
    };
};

export const startSignIn = ( { email, password }: RegisterData ) => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
        let response;
        const { isAuth, data, errorMessage } = await signInWithCredentials({ email, password });

        if( isAuth && data ){
            const { uid, displayName, email, photoURL } = data;
            dispatch( login({ uid, displayName, email, photoURL }) );
            saveNewAuth({ uid, displayName, email, photoURL });
            response = { isAuth };
        }
        else {
            dispatch( logout( errorMessage ) );
            response = { isAuth: false, errorMessage };
        }

        return response;
    };
};

export const startGoogleSignIn = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
    };
};

export const startCreateNewUser = ( { email, password, displayName }: RegisterData ) => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
        let response;

        const { isAuth, data, errorMessage } = await registerUser({ email, password, displayName });

        if( isAuth && data?.user ){
            const { uid, displayName, email, photoURL } = data?.user;
            dispatch( login({ uid, displayName, email, photoURL }) );
            response = { isAuth, displayName };
        }
        else {
            dispatch( logout( errorMessage ) );
            response = { isAuth: false, errorMessage };
        }

        return response;
    };
};