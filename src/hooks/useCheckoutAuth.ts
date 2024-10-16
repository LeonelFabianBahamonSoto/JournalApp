import { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { getUserAuth } from "../helper/localStorage";

export const useCheckoutAuth = () => {
    const [ authState, setAuthState ] = useState<string>( 'not-authenticated' );

    const checkoutState = () => {
        try {
            const firebaseAuth = getAuth();
            if( firebaseAuth.currentUser ){
                return 'authenticated';
            }
            else {
                return 'not-authenticated';
            }
        } catch (error) {
            console.info('E: ', error);
            return 'not-authenticated';
        }
    };

    useEffect(() => {
        const userSessionStorage = getUserAuth();

        if( userSessionStorage && userSessionStorage !== 'not-authenticated' ){
            setAuthState( 'authenticated' );
        }
        else {
            setAuthState( 'not-authenticated' );
        };
    }, []);

    return {
        authState,
        checkoutState,
    };
}