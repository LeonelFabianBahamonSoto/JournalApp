import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '../routes/journalRoutes';

export const JournalNavigation = () => {
    return (
        <Routes>
            {
                routes.map(({ path, Component }) => (
                    path
                        ? ( <Route path={ path } element={ <Component /> } /> )
                        : ( <Route path="/*" element={ <Navigate to="/JournalPage" replace /> } /> )
                ))
            }
        </Routes>
    )
}