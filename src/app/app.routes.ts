import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        // loadChildren: () =>
        //     import('./gifs/pages/dashboard-page/dashboard-page').then((c) => c.DashboardPage),
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
        children: [
            {
                path: 'trending',
                loadComponent: () => import('./gifs/pages/trending-page/trending-page'),
            },
            {
                path: 'search',
                loadComponent: () => import('./gifs/pages/search-page/search-page'),
            },
            {
                path: '**',
                redirectTo: 'trending',
            },
        ],
    },

    {
        path: '**',
        redirectTo: 'dashboard',
    },
];
