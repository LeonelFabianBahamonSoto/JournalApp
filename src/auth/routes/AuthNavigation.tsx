import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../routes/routes';

export const AuthNavigation = () => {
    return (
        <Routes>
            {
                AuthRoutes.map(({ path, Component }) => (
                    <Route path={ path } element={ <Component /> } />
                ))
            }
        </Routes>
    )
}
