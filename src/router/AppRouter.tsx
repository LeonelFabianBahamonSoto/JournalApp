import { Suspense, useEffect, useState } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { AuthNavigation } from '../pages/auth/routes/AuthNavigation';
import { JournalNavigation } from '../journal/routes/JournalNavigation';
import { useCheckoutAuth } from '../hooks/useCheckoutAuth';
import Loading from '../components/templates/Loading';
import { getUserAuth } from '../helper/localStorage';

export const AppRouter = () => {

    const auth = useSelector(( state: RootState ) => state.auth );
    // const { authState } = useCheckoutAuth();

    const [ authState, setAuthState ] = useState<string>( 'not-authenticated' );

    useEffect(() => {
        // console.info( '----> useCheckoutAuth: ', authState );

        const getAuth = () => {
            const isUserAuth = getUserAuth();

            console.info( 'AUTH: ', auth );
            console.info( 'isUserAuth?.uid: ', isUserAuth );

            if( auth.status === 'not-authenticated' && isUserAuth !== false && isUserAuth?.uid ){
                // dispatch( login( isUserAuth ) );
                setAuthState( 'authenticated' );
            }
        };

        getAuth();
    }, []);

    return (
        <Suspense
            fallback={ <Loading /> }
        >
            <BrowserRouter>
                <Routes>
                    {
                        ( authState === 'authenticated' )
                            ? ( <Route path='/*' element={ <JournalNavigation /> } /> )
                            : ( <Route path='/auth/*' element={ <AuthNavigation /> } /> )
                    }

                    <Route path='/*' element={ <Navigate to='/auth/login' /> } />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
