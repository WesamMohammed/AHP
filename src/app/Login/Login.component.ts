import { Component, OnInit } from '@angular/core';
import { UsersLocalstorageService } from '../users-localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _usersService:UsersLocalstorageService,private router: Router) { 

   
    _usersService.setUsers();
 
  
  }

  ngOnInit() {
  }


  model = {
    username: '',
    password: ''
  };

  onSubmit() {
    
    
    if (this.model.username === '' || this.model.password === '') {
      alert('Username and password are required.');
      return;
    }
    let user=this._usersService.login(this.model.username,this.model.password);
    if(!user){
      alert('invalied username or password');
      return;
    }
    console.log(user);
    this.router.navigate(['/lifecycle']);

  }
}

