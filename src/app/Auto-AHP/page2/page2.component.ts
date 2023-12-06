import { Component, OnInit } from '@angular/core';
import { UsersLocalstorageService } from '../../users-localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
currentUser?:any;
  constructor(private userService:UsersLocalstorageService,private router: Router) {

    this.currentUser=userService.currentUser;

   }

  ngOnInit() {
    console.log(this.currentUser);
    
    if(!this.currentUser){
      this.router.navigate(['/login']);
    }
  }
get isAdmin():boolean{
  return this.currentUser.role==="admin";
}
}
