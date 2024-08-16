import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-losing-tab',
  templateUrl: './losing-tab.component.html',
  styleUrl: './losing-tab.component.scss'
})
export class LosingTabComponent {
  constructor(public modal: NgbActiveModal, public gameService: GameService) {}

}
