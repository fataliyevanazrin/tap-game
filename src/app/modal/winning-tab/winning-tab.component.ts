import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-winning-tab',
  templateUrl: './winning-tab.component.html',
  styleUrl: './winning-tab.component.scss'
})
export class WinningTabComponent {
  constructor(public modal: NgbActiveModal, public gameService: GameService) {}
}
