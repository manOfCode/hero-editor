import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'template/app/heroDetails.html'
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}