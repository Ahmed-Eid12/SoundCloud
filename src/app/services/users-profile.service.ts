import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginService } from './user-login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersProfileService {

  constructor(
    private http: HttpClient,
    private userService: UserLoginService
  ) { }

  usersList = localStorage.getItem('usersList') ? JSON.parse(localStorage.getItem('userslist')) : [];
  // usersList = [];
  register(user) {
    this.usersList.push(user);
    localStorage.setItem('usersList' , JSON.stringify(this.usersList))
    this.userService.userLoggedIn = true;
  }
  login(userName , password) {
    return this.usersList.find(res => userName === res.email && password === res.password)

    // for(let user of this.usersList) {
    //   if(user.email == userName && user.password == password){
    //     return user;
    //   }
    // }
    // return false
  }
  
}
