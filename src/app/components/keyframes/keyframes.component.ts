import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.css'],
  animations: [
    trigger('photo', [
      state('move', style({
        transform: 'translateX(0)    rotateY(0)',
      })),
      state('enlarge', style({
        transform: 'scale(1.3)'
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)'
      })),
      transition('* => enlarge, * => spin', animate('500ms ease')),
      // transition('* => move', animate('5000ms ease')),
      transition('* => move',
  animate('5000ms', keyframes([
    style({transform: 'translateX(0)    rotateY(0)',        offset: 0}),
    style({transform: 'translateX(50%)  rotateY(90deg)',    offset: 0.33}),
    style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
    style({transform: 'translateX(0)    rotateY(0)',                  offset: 1.0})
  ])
))
    ])
  ]
})
export class KeyframesComponent implements OnInit {

  photoState = '';
  constructor() { }

  ngOnInit() {
  }

  changeState(photoState: string) {
    this.photoState = photoState;
  }
}
