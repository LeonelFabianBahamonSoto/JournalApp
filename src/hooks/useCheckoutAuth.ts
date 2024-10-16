import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store/store";
import { getUserAuth } from "../helper/localStorage";
import { login } from "../store/auth/authSlice";

export const useCheckoutAuth = () => {
    const auth = useSelector(( state: RootState ) => state.auth );
    const dispatch = useDispatch<AppDispatch>();

    const [ authState, setAuthState ] = useState<string>( 'not-authenticated' );

    const getAuth = async() => {
        const isUserAuth = getUserAuth();

        console.info( 'AUTH: ', auth );
        console.info( 'isUserAuth?.uid: ', isUserAuth );

        if( auth.status === 'not-authenticated' && isUserAuth !== false && isUserAuth?.uid ){
            dispatch( login( isUserAuth ) );
            setAuthState( 'authenticated' );
        }
    };

    useEffect(() => {
        const isUserAuth = getUserAuth();

        console.info( 'AUTH: ', auth );
        console.info( 'isUserAuth?.uid: ', isUserAuth );

        if( auth.status === 'not-authenticated' && isUserAuth !== false && isUserAuth?.uid ){
            dispatch( login( isUserAuth ) );
            setAuthState( 'authenticated' );
        }
    }, [auth, dispatch]);

    return {
        authState,
    };
}