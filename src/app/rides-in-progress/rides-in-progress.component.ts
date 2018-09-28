import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RidesProgressService } from '../rides-progress.service';
import { Observable } from 'rxjs';
import { Ride } from '../ride';

@Component({
  selector: 'app-rides-in-progress',
  templateUrl: './rides-in-progress.component.html',
  styleUrls: ['./rides-in-progress.component.css'],
  providers: [RidesProgressService]
})

export class RidesInProgressComponent implements OnInit {
  @Output() show_read_one_ride_event=new EventEmitter();


  rides: Ride[];
  
  constructor(private ridesService: RidesProgressService) { }

  readOneRide(id){
    console.log("Components"+ id);
    this.show_read_one_ride_event.emit({
        ride_id: id,
        title: "Ride: "+ id
    });
  }

  ngOnInit() {
    this.ridesService.readRide()
            .subscribe(rides =>
                this.rides=rides
            );
  }
}
