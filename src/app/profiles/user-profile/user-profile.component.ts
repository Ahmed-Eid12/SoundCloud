import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private userLogin: UserLoginService ,
    private router: Router
    ) { }

  ngOnInit() {
  }

  logout() {
    this.userLogin.userLoggedIn = false;
    this.router.navigate(['/'])
  }
}
