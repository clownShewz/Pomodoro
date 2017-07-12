export class task{
    taskId : number;
    taskName :string;
    taskStartTime : any;
    taskEndTime : any;
    timeSpent : any;
    completed : boolean;

    constructor(name:string){
        this.taskName = name;
        this.completed = false;
        this.setTaskTime('START');
    }

    setTaskTime(type : string){
        if(type.toUpperCase() === "START"){
            this.taskStartTime = new Date();
        }else if (type.toUpperCase() === "END"){
            this.taskEndTime = new Date();
        }else{
            alert('This is not a good state to be in right now');
        }

    }

    setTimeSpent(){
         this.setTaskTime('END');
         let timeDiff = Math.abs(this.taskEndTime - this.taskStartTime);
         this.timeSpent = this.formatTime(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
    }

    getTimeSpent(){
         return this.timeSpent; 
    }

     formatTime(value:number){
     if(value >= 10){
       return value;
     } else {
       return "0" + value;
     }
  }
}
