import { Component, Input } from '@angular/core';
import { StatsModel } from '../models/stats.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
})
export class GamePageComponent {

  constructor(public gameService: GameService) {}

  ngOnInit() {
    this.gameService.fillInitialDots();

  }


  timeIsUp() {
    this.gameService.timeIsUp();
  }

  tap(blue: boolean) {
    this.gameService.tap(blue);

  }
}
