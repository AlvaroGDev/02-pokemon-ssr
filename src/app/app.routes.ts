import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'pokemons',
    loadComponent: () => import('./pages/pokemons/pokemons-page')
  },
  {
    path: 'pokemons/:id',
    loadComponent: () => import('./pages/pokemon-page/pokemon-page')
  },
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
    redirectTo: () => {
      return 'about';
    }
  },
];
