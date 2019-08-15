import { Component, OnInit } from '@angular/core';
import { SingersService } from 'src/app/services/singers.service';

@Component({
  selector: 'app-sengers-paly-list',
  templateUrl: './sengers-paly-list.component.html',
  styleUrls: ['./sengers-paly-list.component.css']
})
export class SengersPalyListComponent implements OnInit {

  constructor(private singer:SingersService) { }

  singers = this.singer.singers;

  ngOnInit() {
  }

}
