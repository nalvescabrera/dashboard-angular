import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RidesInProgressComponent } from './rides-in-progress/rides-in-progress.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    RidesInProgressComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
