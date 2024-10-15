import { Suspense } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Loading from '../components/templates/Loading';

import { AuthNavigation } from '../pages/auth/routes/AuthNavigation';
import { JournalNavigation } from '../journal/routes/JournalNavigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const AppRouter = () => {

    const auth = useSelector(( state: RootState ) => state.auth );

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
