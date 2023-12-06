import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoAHPComponent } from './Auto-AHP.component';
import { AutoAHPRoutingModule } from './Auto-AHP.routing';
import { FormsModule } from '@angular/forms';
import { RadButComponent } from './Rad-But/Rad-But.component';
import { LifeCycleComponent } from './LifeCycle/LifeCycle.component';
import { Page2Component } from './page2/page2.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutoAHPRoutingModule
  ],
  declarations: [AutoAHPComponent,RadButComponent,LifeCycleComponent,Page2Component,OptionsComponent]
})
export class AutoAHPModule { }
