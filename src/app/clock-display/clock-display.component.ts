import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-display',
  templateUrl: './clock-display.component.html',
  styleUrls: ['./clock-display.component.css']
})
export class ClockDisplayComponent implements OnInit {
  
 time: number;

  constructor() {
   
  }

 

  ngOnInit() {
  }

}


/*
 TODO: create timer object that holds the 2 values in mins and secs
 and is reposnible for it's own display.

 TODO: set interval on the seconds once it hits zero 
 fire an event that will reduce the minutes
 avoid nested loops - tyr observable here 

TODO:Move timer logic to a lower lever 
the display tag will be responsible for the display logic. 
The timer will push up the time value

TODO: create controls to increment timer up and down  from 
default start value. 

TODO: create the timer as a service
pros cons of sep component vs. service

TODO: imput and display for what your are working on 

TODO: add storage for what you're working on and display all

*/