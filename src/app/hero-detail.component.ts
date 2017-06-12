import { Component, Input } from '@angular/core';
//  To define a component, you will import the Component symbol
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  // use `` tilde for putting template component
  template: `
            <div *ngIf ="hero">
              <h2>{{hero.name}} details!</h2>
              <div><label>id: </label>{{hero.id}}</div>
              <div>
                <label> name: </label>
                <input [(ngModel)] = "hero.name"
                placeholder="name"/>
              </div>
            </div>
            `
})

export class HeroDetailComponent{
  @Input() hero: Hero;
}
