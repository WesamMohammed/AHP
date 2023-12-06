import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { UsersLocalstorageService } from './users-localstorage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AHP';

  currentUser?:any;
  constructor(private userService:UsersLocalstorageService,private router: Router) {

    userService.userObservable.subscribe({next:(res)=>{
      this.currentUser=res;
    }})

   }
logout(){
this.userService.logout();
this.router.navigate(["/login"])
}
  
  

}
