import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Hero } from './../../models/hero';
import { HeroService } from './../../services/hero.service';

@Component({
  selector: 'app-leave-in',
  templateUrl: './leave-in.component.html',
  styleUrls: ['./leave-in.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(2)'}),
        animate(500)
      ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(2)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(5)'}))
      ])
    ])
  ]
})
export class LeaveInComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {
    this.heroes = heroService.heroes;
  }

  ngOnInit() { }

  enterAndLeave(hero) {
    this.heroes = this.heroes.filter(x => x !== hero);
  }

  add() {
    const _hero = new Hero('test');
    this.heroes.push(_hero);
  }

  remove() {
    this.heroes.pop();
  }
}
