import { Component, OnInit } from '@angular/core';
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

  rides: Ride[];
  
  constructor(private ridesService: RidesProgressService) { }

  ngOnInit() {
    this.ridesService.readRide()
            .subscribe(rides =>
                this.rides=rides
            );
  }
}
