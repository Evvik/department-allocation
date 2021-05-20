import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('libs/allocation/src').then(m => m.AllocationModule),
  },
];
