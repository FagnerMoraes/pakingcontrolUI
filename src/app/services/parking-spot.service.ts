import { environment } from './../../environments/environment';
import { ParkingSpotResponse } from './../models/parking-spot-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {
  private url = "ParkingSpot"
  constructor(private http: HttpClient) { }

  getParkingSpots() : Observable<ParkingSpotResponse[]>{
    return this.http.get<ParkingSpotResponse[]>(`${environment.apiUrl}/${this.url}`);
  }
}
