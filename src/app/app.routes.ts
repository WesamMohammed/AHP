import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './loginGaurd';

export const routes: Routes = [
    {path:'',loadChildren:()=>import("./Auto-AHP/Auto-AHP.module").then(m=>m.AutoAHPModule), canActivate: [AuthGuard],},
    {path:'login',loadChildren:()=>import("./Login/Login.module").then(m=>m.LoginModule)}
];


  