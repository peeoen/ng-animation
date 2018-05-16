import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-state',
  templateUrl: './multiple-state.component.html',
  styleUrls: ['./multiple-state.component.css'],
  animations: [
    trigger('photo', [
      state('move', style({
        transform: 'translateX(-100%)',
      })),
      state('enlarge', style({
        transform: 'scale(1.3)'
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)'
      })),
      transition('* => *', animate('500ms ease'))
    ])
  ]
})
export class MultipleStateComponent implements OnInit {

  photoState = 'photo';
  constructor() { }

  ngOnInit() {
  }

  changeState(photoState: string) {
    this.photoState = photoState;
  }
}
