import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteBackService } from '../route-back/route-back.service';

@Component({
  selector: 'app-Auto-AHP',
  templateUrl: './Auto-AHP.component.html',
  styleUrls: ['./Auto-AHP.component.css']
})
export class AutoAHPComponent implements OnInit {
option=2;
constructor(private route: ActivatedRoute ,private router:Router,private routBack:RouteBackService) {
  routBack.setBreadcrumbs(this.items)
}
items:any[]=[{title:"LifeCycle",link:"/lifecycle",command:()=>{
  this.router.navigate(["/lifecycle"])}
},{title:"Page2",link:"/page2",command:()=>{
  this.router.navigate(["/page2"])}},{title:"Options",command:()=>{
    this.router.navigate(["/options"])}},{title:"AHP"}]
ngOnInit() {
  // Read the id parameter from the route
  this.route.paramMap.subscribe(params => {
     
     const idParam = params.get('id');
     this.option = idParam ? parseInt(idParam, 10) : 2;
  });

}
}