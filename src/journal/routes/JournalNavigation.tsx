import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '../routes/journalRoutes';

export const JournalNavigation = () => {
    return (
        <Routes>
            {
                routes.map(({ path, Component }) => (
                    <Route path={ path } element={ <Component /> } />
                ))
            }
            {/* Redireccion */}
            <Route path="/*" element={ <Navigate to="/JournalPage" replace /> } />
        </Routes>
    )
}