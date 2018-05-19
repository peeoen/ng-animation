import { Component, OnInit } from '@angular/core';
import { SlideDog } from '../../models/slide-dog';
import { StateDog } from '../../models/state-dog';
import { animation as dogAnimation } from './gallery-slide.animations';

@Component({
  selector: 'app-gallery-slide',
  templateUrl: './gallery-slide.component.html',
  styleUrls: ['./gallery-slide.component.css'],
  animations: dogAnimation
})
export class GallerySlideComponent implements OnInit {

  dogs: SlideDog[] = [];
  active: number;
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      const dog = new SlideDog(`assets/images/dogs/d${i + 1}.jpg`);
      this.dogs.push(dog);
    }

    this.initDogs();
  }

  initDogs() {
    this.transformState(0);
  }

  transformState(index: number) {
    this.active = index;
    this.dogs[index].state = StateDog.Active;
    this.setLeftActive(index);
    this.setRightActive(index);
    this.setLeftRepo(index);
    this.setRightRepo(index);
    console.log(this.dogs);
  }

  setLeftActive(index: number) {
    if (index > 0) {
      this.dogs[index - 1].state = StateDog.LeftActive;
    }
  }

  setRightActive(index: number) {
    if (index < this.dogs.length - 1) {
      this.dogs[index + 1].state = StateDog.RightActive;
    }
  }

  setLeftRepo(index: number) {
    const startIndex = 0;
    const lastIndex =  index - 2;
    if (startIndex <= lastIndex) {
     for (let i = startIndex; i <= lastIndex; i++) {
       this.dogs[i].state = StateDog.LeftRepo;
     }
    }
  }

  setRightRepo(index: number) {
    const startIndex = index + 2;
    const lastIndex =  this.dogs.length - 1;
    if (startIndex <= lastIndex) {
     for (let i = startIndex; i <= lastIndex; i++) {
       this.dogs[i].state = StateDog.RightRepo;
     }
    }
  }

}

