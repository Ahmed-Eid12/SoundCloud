import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-home',
  templateUrl: './first-home.component.html',
  styleUrls: ['./first-home.component.css']
})
export class FirstHomeComponent implements OnInit {

  images = [
    "assets/img-pic/1.jpg",
    "assets/img-pic/2.jpg",
    "assets/img-pic/3.jpg"
  ]

  constructor() { }

  ngOnInit() {
  }

}
