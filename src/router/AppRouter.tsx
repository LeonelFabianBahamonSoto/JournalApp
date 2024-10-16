import { Suspense } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthNavigation } from '../pages/auth/routes/AuthNavigation';
import { JournalNavigation } from '../journal/routes/JournalNavigation';
import Loading from '../components/templates/Loading';

export const AppRouter = ({ authState = 'not-authenticated' }) => {
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
