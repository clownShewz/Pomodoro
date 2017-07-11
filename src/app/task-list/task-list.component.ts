import { Component, OnInit, Input } from '@angular/core';
import { task } from '../task/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  taskList=[];

  constructor() { 

  }

  addTask(name:string){
    if(name){
    this.taskList.push(new task(name))
    }
  }

  ngOnInit() {
  }

}
