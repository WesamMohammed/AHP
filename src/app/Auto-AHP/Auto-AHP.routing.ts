import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoAHPComponent } from './Auto-AHP.component';

const routes: Routes = [
  { path:'ahp',component:AutoAHPComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoAHPRoutingModule { }
