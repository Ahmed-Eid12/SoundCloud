import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersProfileService } from 'src/app/services/users-profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup = new FormGroup({
    'userName': new FormControl(null,[Validators.required]),
    'email': new FormControl(null,[Validators.required]),
    'password': new FormControl(null,[Validators.required]),
    'confirmPassword': new FormControl(null,[Validators.required]),
    'singer': new FormControl('Select Singer')
  })
  constructor(
    private user: UsersProfileService
    ) {
    
   }
   
  ngOnInit() {
    console.log(this.user.usersList)
  }
  saveUser() {
    this.user.register(this.formGroup.value)
  }
}
