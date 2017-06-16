import { Component, OnInit } from '@angular/core';
import { HeroService} from './hero.service';
import { Hero } from './hero';

import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
            // When the app loads, selectedHero is undefined.
            // The selected hero is initialized when the user clicks a hero's name.
            // Although selectedHero.name is displayed in the template, you must keep the hero detail out of the DOM until there is a selected hero.
            // Wrap the HTML hero detail content of the template with a <div>. Then add the ngIf built-in directive and set it to the selectedHero property of the component.
  styleUrls:   ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  };

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void{
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h!== hero);
        if (this.selectedHero === hero) { this.selectedHero = null;
        }
      })
  }
}

// To have Angular call getHeroes(), you can implement the Angular ngOnInit lifecycle hook.
// Angular offers interfaces for tapping into critical moments in the component lifecycle: at creation, after each change, and at its
// eventual destruction.
