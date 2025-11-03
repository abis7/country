import { Route } from '@angular/router';
import { CountryPage } from './pages/country-page/country-page';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';

export const countryRoutes: Route[] = [
  {
    path: '',
    component: CountryPage,
    children: [
      {
        path: 'by-country',
        component: ByCountryPage 
      },
      {
        path: 'by-capital',
  component: ByCapitalPage
      },
      {
        path: 'by-region',
        component: ByRegionPage
      },
      {
        path: '**',
        redirectTo: 'by-country'
      }
    ]
  }
];

export default countryRoutes;
