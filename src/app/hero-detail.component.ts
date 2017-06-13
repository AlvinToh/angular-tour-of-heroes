import { Component, Input, OnInit } from '@angular/core';
//  To define a component, you will import the Component symbol
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

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

export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.Params
      .switchMap((params: Params)) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
}
