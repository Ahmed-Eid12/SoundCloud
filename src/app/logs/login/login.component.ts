import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UsersProfileService } from 'src/app/services/users-profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //users = this.user.users;
  formGroup = new FormGroup({
    'email': new FormControl(null,[Validators.required]),
    'password': new FormControl(null,[Validators.required])
  })
  constructor(
    private userLogin: UserLoginService,
    private user: UsersProfileService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    console.log(this.formGroup.value)
    console.log(this.formGroup.get('email').errors)
    console.log(this.formGroup.get('password').errors)
   }

  ngOnInit() {
  }

  login() {


    this.user.login(this.formGroup.get('email'),this.formGroup.get('password'));
    this.userLogin.userLoggedIn = true;

    // for(let i=0; i<this.user.users.length; i++){
    //   if(this.formGroup.get('email').value === this.users[i].email &&
    //     this.formGroup.get('password').value === this.user.users[i].password){
    //       this.userLogin.userLoggedIn = true;
    //       let userDirectionURL = this.route.snapshot.queryParamMap.get('userDirectionURL');
    //       if(userDirectionURL) {
    //         this.router.navigate([userDirectionURL])
    //       }
    //     } else {
    //       this.userLogin.userLoggedIn = false;
    //     }
    // }
    
  }

}
