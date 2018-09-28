import { Component, OnChanges} from '@angular/core';
  import { RidesProgressService } from '../rides-progress.service';
  import { Observable } from 'rxjs';
  import { Ride } from '../ride';
  import { EventEmitter } from '@angular/core';
  import {Input, Output} from '@angular/core';

  @Component({
    selector: 'app-read-one-ride',
    templateUrl: './read-one-ride.component.html',
    styleUrls: ['./read-one-ride.component.css'],
    providers: [RidesProgressService]
  })
  export class ReadOneRideComponent implements OnChanges {

   @Output() show_read_rides_event = new EventEmitter();
//    @Output() show_read_one_ride_event=new EventEmitter();

    // @Input means it will accept value from parent component (AppComponent)
    @Input() ride_id;

    ride: Ride;  
   

    // initialize product service
    constructor(private rideService: RidesProgressService){}
  
    // user clicks the 'read products' button
    readRides(){
        this.show_read_rides_event.emit({ title: "Read Rides" });
    }

    ngOnChanges(){
        console.log(this.ride_id);
        this.rideService.readOneRide(this.ride_id)
            .subscribe(ride => this.ride=ride);
    }
  }
  

