import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('dogInOut', [
      state('active', style({transform: 'rotateY(0deg)'})),
      state('inactive', style({transform: 'rotateY(90deg)'})),
      transition('active => inactive', [
        animate('200ms ease-out')
      ]),
      transition('inactive => active', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {

  dogs: Dog [] = [];
  changeStateDog = 'inactive';
  dogActive: Dog;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    for (let i = 1; i <= 8; i++) {
      const dog = new Dog(`dog ${i}`, `assets/images/dogs/d${i}.jpg`);
      this.dogs.push(dog);
    }
    this.setActive(this.dogs[0]);
  }

  setActive(dog: Dog) {
   if (this.changeStateDog === 'active') {
      setTimeout(() => {
        this.changeStateDog = 'inactive';
        this.cd.markForCheck();
      }, 0);
    }

    setTimeout(() => {
      this.dogActive = dog;
      this.changeStateDog = 'active';
      this.cd.markForCheck();
    }, 200);
  }

  stopAnimation() {
    this.changeStateDog = 'reset';
  }

}


export class Dog {
  constructor(public name: string, public path: string) {}
}
