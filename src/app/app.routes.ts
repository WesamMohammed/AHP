import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadChildren:()=>import("./Auto-AHP/Auto-AHP.module").then(m=>m.AutoAHPModule)}
];


  