import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel for usage in forms

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule // import the forms module before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
   ],
  bootstrap:    [ AppComponent ]
})

// declarations contains a of components, pipes and directives that belong to the module 
export class AppModule { }
