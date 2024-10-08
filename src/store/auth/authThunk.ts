import { AppDispatch } from "../store";

import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
    };
};

export const startGoogleSignIn = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
    };
};