import { Component } from '@angular/core';

export class Hero{
  id: number;
  name: string;
}

// creates a constant array of Heroes
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]

@Component({
  selector: 'my-app',
  template: `
            <h1>{{title}}</h1>
            <h2>My Heroes</h2>
            <ul class="heroes">
                <!-- putting onclick selector on each hero -->
                <li *ngFor="let hero of heroes"
                (click)="onSelect(hero)"
                [class.selected]="hero === selectedHero">
                <!-- *ngFor indicates <li> element and its children consitutes a master template-->
                <!-- let hero identifies each hero of heroes-->
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>
            <div *ngIf="selectedHero">
              <h2>{{selectedHero.name}} details!</h2>
              <div><label>id: </label>{{selectedHero.id}}</div>
              <div>
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name">
                </div>
            </div>
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
export class AppComponent  {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  };
}
