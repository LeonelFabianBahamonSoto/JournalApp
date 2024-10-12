import { Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loading from '../components/templates/Loading';

import { AuthNavigation } from '../pages/auth/routes/AuthNavigation';
import { JournalNavigation } from '../journal/routes/JournalNavigation';

export const AppRouter = () => {
    return (
        <Suspense
            fallback={ <Loading /> }
        >
            <BrowserRouter>
                <Routes>
                    {/* Login */}
                    <Route path='/auth/*' element={ <AuthNavigation /> } />

                    {/* Journal */}
                    <Route path='/*' element={ <JournalNavigation /> } />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
