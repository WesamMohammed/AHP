import { Component, OnInit } from '@angular/core';
import { UsersLocalstorageService } from '../../users-localstorage.service';
import { Router } from '@angular/router';
import { RouteBackService } from '../../route-back/route-back.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
currentUser?:any;
items:any[]=[{title:"LifeCycle",link:"/lifecycle",command:()=>{
  this.router.navigate(["/lifecycle"])}
},{title:"Page2",link:"/page2"}]
  constructor(private userService:UsersLocalstorageService,private router: Router,private routeBackService:RouteBackService) {

    this.currentUser=userService.currentUser;
    this.routeBackService.setBreadcrumbs(this.items);

   }

  ngOnInit() {
    
    
    
    
    if(!this.currentUser){
      this.router.navigate(['/login']);
    }
  }
get isAdmin():boolean{
  return this.currentUser.role==="admin";
}
}
