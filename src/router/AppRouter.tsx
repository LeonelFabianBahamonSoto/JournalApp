import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthNavigation } from '../auth/routes/AuthNavigation';
import { JournalNavigation } from '../journal/routes/JournalNavigation';
import { Suspense } from 'react';

export const AppRouter = () => {
    return (
        <Suspense
            fallback={ <span> LOADING ... </span> }
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
