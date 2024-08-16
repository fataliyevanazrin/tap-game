import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StatsModel } from '../models/stats.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { DotModel } from '../models/dot.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WinningTabComponent } from '../modal/winning-tab/winning-tab.component';
import { LosingTabComponent } from '../modal/losing-tab/losing-tab.component';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  initialTime: number = 100;
  showTimer: boolean = true;

  stats: StatsModel = {
    energy: 5,
    totalPoints: 0,
    tap: 0,
    maxTap: 5,
    stage: 1,
  };

  private dotLisSubject: BehaviorSubject<DotModel[]> = new BehaviorSubject<
    DotModel[]
  >([]);
  public dotList$: Observable<DotModel[]> = this.dotLisSubject.asObservable();

  constructor(private router: Router, private modalService: NgbModal) {}

  tap(blue: boolean) {
    if (blue) {
      this.stats.tap++;
      this.stats.totalPoints += this.stats.stage;
      this.giveRandomCoordinates();
      if (this.stats.tap === this.stats.maxTap) {
        this.openNextStageModal();
      }
    } else {
      this.openLosingModal();
    }
  }

  fillInitialDots() {
    const array: DotModel[] = [{ x: 0, y: 0, blue: true }];
    for (let i: number = 0; i < this.stats.maxTap - 1; i++) {
      array.push({ x: 0, y: 0 });
    }
    this.dotLisSubject.next(array);
    this.giveRandomCoordinates();
    this.showTimer = true;
  }

  generateRandomCoordinates() {
    const width = window.innerWidth - 100;
    const height = window.innerHeight - 140;
    let x = Math.random() * width;
    let y = Math.random() * height + 86;
    return { x, y };
  }

  giveRandomCoordinates() {
    const dotlist = this.dotLisSubject.getValue();
    dotlist.forEach((dot) => {
      const newCoordinates = this.generateRandomCoordinates();
      dot.x = newCoordinates.x;
      dot.y = newCoordinates.y;
    });
    this.dotLisSubject.next(dotlist);
  }

  openNextStageModal() {
    this.showTimer = false;
    const modalRef = this.modalService.open(WinningTabComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.closed.subscribe((value) => {
      this.nextStage();
    });
  }

  openLosingModal() {
    this.showTimer = false;
    const modalRef = this.modalService.open(LosingTabComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.closed.subscribe((value) => {
      this.restartGame();
    });
  }

  restartGame() {
    if (this.stats.energy === 0) {
      alert('wait energy');
      return;
    }
    this.dotLisSubject.next([]);
    this.stats = {
      energy: this.stats.energy - 1,
      totalPoints: 0,
      tap: 0,
      maxTap: 5,
      stage: 1,
    };
    this.fillInitialDots();
  }

  nextStage() {
    this.stats.stage++;
    this.stats.tap = 0;
    this.stats.maxTap++;
    this.initialTime+=10;
    this.showTimer = true;
    const dotlist = this.dotLisSubject.getValue();
    dotlist.push(
      {
        x: 0,
        y: 0,
      }
    );
    this.dotLisSubject.next(dotlist);
    this.giveRandomCoordinates();
  }

  timeIsUp() {
    if (this.showTimer) {
      this.openLosingModal();
    }
  }
}
