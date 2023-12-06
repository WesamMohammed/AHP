import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoAHPComponent } from './Auto-AHP.component';
import { LifeCycleComponent } from './LifeCycle/LifeCycle.component';
import { Page2Component } from './page2/page2.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  { path:'ahp/:id',component:AutoAHPComponent },
  {path:'lifecycle',component:LifeCycleComponent},
  {path:'page2',component:Page2Component},
  {path:"options",component:OptionsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoAHPRoutingModule { }
