import { Component, Input } from '@angular/core';
import { StatsModel } from '../models/stats.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  @Input() stats!: StatsModel;

}
