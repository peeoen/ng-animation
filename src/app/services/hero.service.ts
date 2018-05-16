import { Injectable } from '@angular/core';
import { Hero } from './../models/hero';

const ALL_HEROES = [
  'Windstorm',
  'RubberMan',
  'Bombasto',
  // 'Magneta',
  // 'Dynama',
  // 'Narco',
  // 'Celeritas',
  // 'Dr IQ',
  // 'Magma',
  // 'Tornado',
  // 'Mr. Nice'
].map(name => new Hero(name));

@Injectable({
    providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [];

  constructor() {
      this.heroes = ALL_HEROES;
  }

  canAdd() {
    return this.heroes.length < ALL_HEROES.length;
  }

  canRemove() {
    return this.heroes.length > 0;
  }

  addActive(active = true) {
    const hero = ALL_HEROES[this.heroes.length];
    hero.state = active ? 'active' : 'inactive';
    this.heroes.push(hero);
  }

  addInactive() {
    this.addActive(false);
  }

  remove() {
    this.heroes.length -= 1;
  }

}
