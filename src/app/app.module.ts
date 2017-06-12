import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel for usage in forms

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule // import the forms module before binding with [(ngModel)]
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
