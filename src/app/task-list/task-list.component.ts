import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  taskList=[];

  constructor() { 

  }

  addTaskToList(task:any){
    this.taskList.push(task);
  }

  ngOnInit() {
  }

}
