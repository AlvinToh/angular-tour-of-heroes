import { Component, OnInit } from '@angular/core';
import { HeroService} from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-heroes',
  template: `
            <h1>{{title}}</h1>
            <h2>My Heroes</h2>
            <ul class="heroes">
                <!-- putting onclick selector on each hero -->
                <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <!-- *ngFor indicates <li> element and its children consitutes a master template-->
                <!-- let hero identifies each hero of heroes-->
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>
            <hero-detail [hero]="selectedHero"></hero-detail>
            `,
            // When the app loads, selectedHero is undefined.
            // The selected hero is initialized when the user clicks a hero's name.
            // Although selectedHero.name is displayed in the template, you must keep the hero detail out of the DOM until there is a selected hero.
            // Wrap the HTML hero detail content of the template with a <div>. Then add the ngIf built-in directive and set it to the selectedHero property of the component.
  styles:   [`
              .selected {
                background-color: #CFD8DC !important;
                color: white;
              }
              .heroes {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
              }
              .heroes li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
              }
              .heroes li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
              }
              .heroes li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
              }
              .heroes .text {
                position: relative;
                top: -3px;
              }
              .heroes .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
              }
            `]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  };
}

// To have Angular call getHeroes(), you can implement the Angular ngOnInit lifecycle hook.
// Angular offers interfaces for tapping into critical moments in the component lifecycle: at creation, after each change, and at its
// eventual destruction.
