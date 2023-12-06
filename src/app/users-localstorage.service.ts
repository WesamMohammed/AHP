import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersLocalstorageService {
currentUser?:any;
private userSubject=new Subject<any>();
userObservable=this.userSubject.asObservable();
constructor() { }

getUsers(){
  let us=localStorage.getItem('users');
  let storedUsers:any;
  if(us){
     storedUsers = JSON.parse(us);
  }
return storedUsers;
}
login(username:string,password:string){
  let users=this.getUsers() as any[];
  let user=users.find(a=>a.username===username && a.password===password);
  
  if(user){
    this.currentUser=user;
    this.userSubject.next(user);
    return user;
  }

  return null;
}
setUsers(){
  const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user1', password: 'user1123', role: 'user' },
    { username: 'user2', password: 'user2123', role: 'user' }
];

// Store user data in localStorage
localStorage.setItem('users', JSON.stringify(users));
}

logout(){
  localStorage.removeItem('user');
  this.currentUser=null;
  this.userSubject.next(null);
}

}
