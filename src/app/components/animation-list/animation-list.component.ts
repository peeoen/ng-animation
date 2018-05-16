import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-list',
  templateUrl: './animation-list.component.html',
  styleUrls: ['./animation-list.component.css'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img', style({ transform: 'translateX(-1000%)'})),
        query('img',
          stagger('200ms', [
            animate('1000ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class AnimationListComponent implements OnInit {

  photos: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 4; i++) {
      this.photos.push(`assets/images/p${i}.png`);
    }
  }
}
