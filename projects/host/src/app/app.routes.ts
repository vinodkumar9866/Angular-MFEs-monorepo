import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: async () => {
      const m = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
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
        remoteEntry: 'http://localhost:4400/remoteEntry.js',
        exposedModule: './Cart',
      });
      return m.AppComponent;
    },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
