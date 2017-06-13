import { Injectable } from '@angular/core';

import { Hero } from './Hero';
import { HEROES } from './mock-heroes';

// @injectable tells typescript to emit meta data about the service
// applying the @Injectable() decorator ​from the start ensures consistency and future-proofing.
@Injectable()

//The heroSerice could get Hero data from anywhere, a web service, local storage, or a mock data s
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()),2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
    .then(heroes => heroes.find(hero => hero.id === id));
  }
}
