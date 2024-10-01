import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthNavigation } from '../auth/routes/AuthNavigation';
import { JournalNavigation } from '../journal/routes/JournalNavigation';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Login */}
                <Route path='/auth/*' element={ <AuthNavigation /> } />

                {/* JournalApp */}
                <Route path='/*' element={ <JournalNavigation /> } />
            </Routes>
        </BrowserRouter>
    )
}
