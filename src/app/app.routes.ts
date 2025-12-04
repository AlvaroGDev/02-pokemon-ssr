import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page.component')
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/price/pricing-page.component')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page.component')
  },
  {
    path: '**',
    loadComponent: () => import('./pages/about/about-page.component')
    },
];
