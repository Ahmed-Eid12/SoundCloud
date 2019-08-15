import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  // for login
  userLoggedIn = false;

  // for dirction or navigate
  userDirectionURL = null;
  constructor() { }
}
