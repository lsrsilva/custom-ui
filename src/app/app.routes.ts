import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'header1'
  },
  {
    path: 'header1',
    loadComponent: () => import('./header1/header1.component').then(c => c.Header1Component),
  },
  {
    path: 'header2',
    loadComponent: () => import('./header2/header2.component').then(c => c.Header2Component),
  },
];
