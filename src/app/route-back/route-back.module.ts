import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteBackComponent } from './route-back.component';
import { RouteBackService } from './route-back.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RouteBackComponent],
  
  exports:[RouteBackComponent],
  providers:[RouteBackService]
})
export class RouteBackModule { }
