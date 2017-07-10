import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskName : string;
  timeSpentOnTask : number;

  constructor(name:string) {
      this.taskName = name;
   }


  setTimeSpent(time : number){
      this.timeSpentOnTask = time;
  }

  ngOnInit() {
  }

}
