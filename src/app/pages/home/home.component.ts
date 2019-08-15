import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  music ={
    music: 'Music',
    info: 'this project just like sound cloud and for testing only ... ',
    author: 'Ahmed Eid',
    authorInfo: 'I am a full stack (nodeJS,java) developer'
  }
  
  ngOnInit() {
  }

}
