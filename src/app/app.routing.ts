import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
