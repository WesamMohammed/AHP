import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoAHPComponent } from './Auto-AHP.component';
import { AutoAHPRoutingModule } from './Auto-AHP.routing';
import { FormsModule } from '@angular/forms';
import { RadButComponent } from './Rad-But/Rad-But.component';
import { LifeCycleComponent } from './LifeCycle/LifeCycle.component';
import { Page2Component } from './page2/page2.component';
import { OptionsComponent } from './options/options.component';
import { Options2Component } from './options2/options2.component';
import { UsingIndicatorsComponent } from './using-indicators/using-indicators.component';
import { RouteBackModule } from '../route-back/route-back.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutoAHPRoutingModule
    
  ],
  declarations: [AutoAHPComponent,RadButComponent,LifeCycleComponent,Page2Component,OptionsComponent,Options2Component,UsingIndicatorsComponent]
})
export class AutoAHPModule { }
