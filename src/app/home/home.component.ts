import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  

  constructor(public gameService: GameService) {}

 


}
