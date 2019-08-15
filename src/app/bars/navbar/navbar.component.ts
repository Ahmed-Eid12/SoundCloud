import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search = new FormControl(null , [Validators.required]);

  searching() {
    if(this.search.value) {
      console.log(this.search.value)
    } else {
      console.log("no searching")
    }
  }

  constructor() { }
  
  ngOnInit() {
  }

}
