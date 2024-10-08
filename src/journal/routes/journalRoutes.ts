import { lazy, LazyExoticComponent } from "react";

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<() => JSX.Element>,
    name: string,
};

const JournalPage = lazy(() => import(/* webpackChunkName: "JournalPage" */'../pages/JournalPage'));

export const routes: Route[] = ([
    {
        Component: JournalPage,
        name: 'JournalPage',
        path: 'JournalPage',
        to: '/JournalPage',
    },
]);