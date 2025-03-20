import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Hauptroute
  { path: '**', redirectTo: '' } // Fallback für 404
];
