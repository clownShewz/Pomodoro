import { Component, OnInit, Input } from '@angular/core';
import { task } from './models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  host:{
    class:"list-group-item"
  }
})
export class TaskComponent implements OnInit {
  @Input()
  task: task;

  constructor() {
     
   }
   
   setTimeSpent(){
     this.task.setTimeSpent();
   }

  ngOnInit() {
  }

}
