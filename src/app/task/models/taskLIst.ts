import { task } from './task';

export class taskList{

    taskList=[];

    constructor(){

    }

    addToList(task: task){
        if(task){
            this.taskList.push(task);
        }
    }

    removeFromList(task: task){
        let taskToDelete = this.taskList.filter((tsk)=>{ return  tsk.Id === task.taskId;});
        let idx = this.taskList.indexOf(taskToDelete);
        this.taskList = this.taskList.slice(idx, idx+1);

    }
}