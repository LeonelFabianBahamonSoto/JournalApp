import { Suspense, useEffect } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { AuthNavigation } from '../pages/auth/routes/AuthNavigation';
import { JournalNavigation } from '../journal/routes/JournalNavigation';
import { useCheckoutAuth } from '../hooks/useCheckoutAuth';
import Loading from '../components/templates/Loading';

export const AppRouter = () => {

    const auth = useSelector(( state: RootState ) => state.auth );
    const { authState } = useCheckoutAuth();

    useEffect(() => {
        console.info( '----> useCheckoutAuth: ', authState );
    }, []);

    return (
        <Suspense
            fallback={ <Loading /> }
        >
            <BrowserRouter>
                <Routes>
                    {
                        ( auth.status === 'authenticated' )
                            ? ( <Route path='/*' element={ <JournalNavigation /> } /> )
                            : ( <Route path='/auth/*' element={ <AuthNavigation /> } /> )
                    }

                    <Route path='/*' element={ <Navigate to='/auth/login' /> } />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
