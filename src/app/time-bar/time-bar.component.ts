import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrl: './time-bar.component.scss'
})
export class TimeBarComponent {
  @Input() initialTime: number = 5;
  @Output() timeIsUp: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  currentTime: number = 0;

  ngOnInit() {
    this.startTimer();
    this.currentTime = this.initialTime;
  }

  startTimer() {
   const interval = setInterval(() => {
     this.currentTime--;
     if(this.currentTime === 0) {
      clearInterval(interval);
      this.timeIsUp.emit(true);
     }
    }, 100)
  }

}
