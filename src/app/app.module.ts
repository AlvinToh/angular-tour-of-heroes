import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel for usage in forms

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService} from './hero.service';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule, // import the forms module before binding with [(ngModel)]
    RouterModule.forRoot([ //forRoot method is called because a configured router is provided at the app's root
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
   ],
   providers: [
     HeroService
   ],
   bootstrap:    [ AppComponent ]
})
// declarations contains a of components, pipes and directives that belong to the module
export class AppModule { }
