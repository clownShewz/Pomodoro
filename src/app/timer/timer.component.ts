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
  maxValue: number = 60;

  constructor() { 
    this.timerInitialValue = 45;
    this.initializeTimer();
  }

   initializeTimer (){
    this.timer = new Date();
    this.timer.setMinutes(this.timerInitialValue);
    this.timer.setSeconds(0);
    this.minutes = this.timer.getMinutes();
    this.seconds = this.timer.getSeconds() + "0";
  }

  startTimer(){    
    this.timerIntervalId = setInterval(()=>{ 
       this.timer -= 1000;
        let minutes = Math.floor((this.timer % (1000 * 60 * 60)) / (1000 * 60));
       
       if(minutes >= 10){
          this.minutes = minutes;
       } else{
          this.minutes = "0" + minutes; //TODO make this a pipe 
       }

       let seconds =  Math.floor((this.timer % (1000 * 60)) / 1000);

       if(seconds >= 10){
          this.seconds = seconds;
       } else{
          this.seconds = "0" + seconds; //TODO make this a pipe 
       }
      },1000);


  }

 stopTimer(){
    this.timerLastValue = this.minutes;
    clearInterval(this.timerIntervalId);

  }

   increaseTimer(){
      this.timerInitialValue +=1;
      this.initializeTimer();
  }

   decreaseTimer(){
      this.timerInitialValue -=1;
      this.initializeTimer();
  }

    resetTimer(){
     this.initializeTimer();
  }

  ngOnInit() {
  }

}
