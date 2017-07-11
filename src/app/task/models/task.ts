export class task{
    taskName :string;
    taskTime : number;
    completed : boolean;

    constructor(name:string){
        this.taskName = name;
        this.completed = false;
    }

    setTimeSpent(time : number){
        this.taskTime = time;
    }
}
