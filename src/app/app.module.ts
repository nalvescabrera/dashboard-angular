import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RidesInProgressComponent } from './rides-in-progress/rides-in-progress.component';
import { HttpModule } from '@angular/http';
import { ReadOneRideComponent } from './read-one-ride/read-one-ride.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RidesInProgressComponent,
    ReadOneRideComponent
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
