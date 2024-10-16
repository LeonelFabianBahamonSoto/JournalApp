import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store/store";
import { getUserAuth } from "../helper/localStorage";
import { login } from "../store/auth/authSlice";

export const useCheckoutAuth = () => {
    const auth = useSelector(( state: RootState ) => state.auth );
    const dispatch = useDispatch<AppDispatch>();

    const [ authState, setAuthState ] = useState<string | object>( 'not-authenticated' );

    useEffect(() => {
        const isUserAuth = getUserAuth();

        if( auth.status === 'authenticated' ){
            setAuthState( auth );
            return;
        }
        else if( isUserAuth !== false && isUserAuth?.uid ){
            setAuthState( isUserAuth );
            dispatch( login( isUserAuth ) );
            return;
        }
    }, []);

    return {
        authState,
    };
}