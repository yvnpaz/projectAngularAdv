import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'products', component: ProductListComponent
    },
    {
        path: 'addProduct', component: ProductAddComponent
    },
    {
        path: 'product/:id', component: ProductDetailComponent
    },
    {
        path: 'editProduct/:id', component: ProductEditComponent
    },
    {
        path: '**', component: ErrorComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);