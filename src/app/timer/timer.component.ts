import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer : any;
  minutes : any;
  seconds : any;
  timerIntervalId: any;
  timerLastValue: number;
  timerInitialValue: number;
  timerBreakValue : number;
  maxValue: number = 60;
  progress: any;
  break: boolean =false;
  work: boolean = true;
  breakCount: number = 0;

  constructor() { 
    this.timerInitialValue = 25;
    this.timerBreakValue = 5;
    this.initializeTimer();
  }

   initializeTimer (){
    this.timer = new Date();
    this.timer.setMinutes(this.getTimerValue());
    this.timer.setSeconds(0);
    this.minutes = this.formatTime(this.timer.getMinutes());
    this.seconds = this.timer.getSeconds() + "0";
  }

  startTimer(){ 
    let counter = 1000; 
    let prog = 1000;
    let timerValue=0;

    timerValue = (this.getTimerValue() * 60 * 1000);

    if(!this.timerIntervalId){
    this.timerIntervalId = setInterval(()=>{ 
       this.timer -= counter;
       this.minutes = this.formatTime(Math.floor((this.timer % (1000 * 60 * 60)) / (1000 * 60)));
       this.seconds =  this.formatTime(Math.floor((this.timer % (1000 * 60)) / 1000));
       this.progress = prog / timerValue * 100 + '%';
       prog += 1000;

       if(prog === timerValue && this.work===true){
            //done, break time!
            this.stopTimer();
            this.toggleState();
            this.initializeTimer();
            this.startTimer();
            //this.breakCount += 1;
        } 
        else if(prog === timerValue &&this.work === false){
          //done - done!
            this.stopTimer();
            this.toggleState();
            this.initializeTimer();
            //this.breakCount += 1;
       }
      },1000);
    }

  }



 stopTimer(){
    this.timerLastValue = this.minutes;
    clearInterval(this.timerIntervalId);
    this.timerIntervalId = '';
  }

   increaseTimer(){
  if(this.work===true){
        this.timerInitialValue +=1;
      } else if (this.break === true){
       this.timerBreakValue +=1;
    }

      this.initializeTimer();
  }

   decreaseTimer(){
    if(this.work===true){
        this.timerInitialValue -=1;
      } else if (this.break === true){
       this.timerBreakValue -=1;
    }
   
      this.initializeTimer();
  }

    resetTimer(){
     this.stopTimer();
     this.initializeTimer();
     this.progress = '0%';
     this.toggleState();
  }

  getTimerValue(){
    if(this.work===true){
      return this.timerInitialValue
    } else if (this.break === true){
      return this.timerBreakValue;
    }
  }

  formatTime(value:number){
     if(value >= 10){
       return value;
     } else {
       return "0" + value;
     }
  }

   toggleState(){
     if(this.work === true){
        this.work = false;
        this.break = true;
     } else if(this.work === false){
        this.work =true;
        this.break=false;
     }

    

   }

  ngOnInit() {
  }

}
