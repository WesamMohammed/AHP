import { Component, Input, OnInit } from '@angular/core';
import { RouteBackService } from './route-back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-back',
  templateUrl: './route-back.component.html',
  styleUrls: ['./route-back.component.css']
})
export class RouteBackComponent implements OnInit {

   items!:any[];
  constructor(private service:RouteBackService,private router:Router) {
  
   }

  ngOnInit() {
    this.service.items.subscribe((res)=>{
      this.items=res;
    })
  }
goTo(links:string[]){
  console.log("links:",links);
  
this.router.navigate(links);
}
Comand(comand:any){
  comand();
}
}
