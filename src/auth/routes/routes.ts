import { lazy, LazyExoticComponent } from "react";

interface Route {
    to?: string,
    path: string,
    Component: LazyExoticComponent<() => JSX.Element>,
    name?: string,
};

const LoginPage = lazy(() => import(/* webpackChunkName: "LoginPage" */'../pages/LoginPage'));
const RegisterPage = lazy(() => import(/* webpackChunkName: "RegisterPage" */'../pages/RegisterPage'));

export const AuthRoutes: Route[] = ([
    {
        Component: LoginPage,
        name: 'LoginPage',
        path: 'LoginPage',
        to: '/LoginPage',
    },
    {
        Component: RegisterPage,
        name: 'RegisterPage',
        path: 'RegisterPage',
        to: '/RegisterPage',
    },
]);