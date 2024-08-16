import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DotModel } from '../models/dot.model';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrl: './dot.component.scss'
})
export class DotComponent {
  @Input() dot!: DotModel;
  @Output() tap = new EventEmitter();

  dotClick() {
    this.tap.emit(this.dot.blue);
  }
}