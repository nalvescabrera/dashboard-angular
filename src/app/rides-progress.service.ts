import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ride } from './ride';
import { map } from 'rxjs/operators';
import { Category } from './category';


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


  createPlayer(player): Observable<Category>{
  
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this._http.post(
        "http://localhost:3000/api/player/create/",
        player,
       options
    ).pipe(map((res: Response) => res.json()));
    }
}
