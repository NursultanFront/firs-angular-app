import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('@new/feature-user-list').then((m) => m.featureUsersListRoutes),
  },
];
