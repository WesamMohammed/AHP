import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { RouteBackService } from '../../route-back/route-back.service';

@Component({
  selector: 'app-LifeCycle',
  templateUrl: './LifeCycle.component.html',
  styleUrls: ['./LifeCycle.component.css']
})
export class LifeCycleComponent implements OnInit {
items:any[]=[{title:"LifeCycle",link:'lifecycle'}]
  constructor(private routbackSer:RouteBackService) {
    this.routbackSer.setBreadcrumbs(this.items);
   }
 
  ngOnInit() {
    
  }

}
