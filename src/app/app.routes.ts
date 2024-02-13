import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tienda', component: TiendaComponent},
    { path: 'tienda/:id', component: TiendaComponent},
    {  path: '**',   redirectTo: '', pathMatch: 'full' }
];
