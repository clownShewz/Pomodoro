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

  removeFromList(task: task){
        let taskToDelete = this.taskList.filter((tsk)=>{ return  tsk.Id === task.taskId;});
        let idx = this.taskList.indexOf(taskToDelete);
        this.taskList = this.taskList.slice(idx, idx+1);

    }

  ngOnInit() {
  }

}
