import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-display',
  templateUrl: './clock-display.component.html',
  styleUrls: ['./clock-display.component.css']
})
export class ClockDisplayComponent implements OnInit {
  
 time: number;

  constructor() {
    this.time = Date.now();
  }

 

  ngOnInit() {
  }

}


/*

TODO: imput and display for what your are working on 

TODO: add storage for what you're working on and display all

*/