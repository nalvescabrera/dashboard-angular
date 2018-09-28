import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ride } from './ride';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RidesProgressService {

  constructor(private _http : Http) { }
 
  // Get all rides from remote server
    readRide(): Observable<Ride[]>{
      return this._http
      .get("http://localhost:3000/api/rides-progress")
      .pipe(map((res: Response) => res.json()));
  }

  // // Get a ride details from remote server.
  readOneRide(ride_id): Observable<Ride>{
    return this._http
        .get("http://localhost:3000/api/ride/" + ride_id)
        .pipe(map((res: Response) => res.json()));
  }
}
