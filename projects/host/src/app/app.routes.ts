import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../../environments/environment';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: async () => {
      const m = await loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.urls.dashboard}/remoteEntry.js`,
        exposedModule: './Dashboard',
      });
      return m.AppComponent;
    },
  },
  {
    path: 'cart',
    loadComponent: async () => {
      const m = await loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.urls.cart}/remoteEntry.js`,
        exposedModule: './Cart',
      });
      return m.AppComponent;
    },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
