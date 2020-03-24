import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component'

const appRoutes: Routes = [
    {
        path: '', component: EmployeeComponent
    },
    {
        path: 'employee', component: EmployeeComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);