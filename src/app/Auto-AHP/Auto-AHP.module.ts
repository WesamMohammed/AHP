import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoAHPComponent } from './Auto-AHP.component';
import { AutoAHPRoutingModule } from './Auto-AHP.routing';
import { FormsModule } from '@angular/forms';
import { RadButComponent } from './Rad-But/Rad-But.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutoAHPRoutingModule
  ],
  declarations: [AutoAHPComponent,RadButComponent]
})
export class AutoAHPModule { }
