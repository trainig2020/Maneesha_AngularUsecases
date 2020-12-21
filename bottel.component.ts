import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottel',
  templateUrl: './bottel.component.html',
  styleUrls: ['./bottel.component.css']
})
export class BottelComponent implements OnInit {
  todayNumber: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
