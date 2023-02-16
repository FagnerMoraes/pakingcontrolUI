import { environment } from './../../environments/environment';
import { ParkingSpotResponse } from './../models/parking-spot-response';
import { ParkingSpotRequest } from './../models/parking-spot-request';
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

  postParkingSpot(request: ParkingSpotRequest) : Observable<ParkingSpotResponse[]>{
    return this.http.post<ParkingSpotResponse[]>(
      `${environment.apiUrl}/${this.url}/iniciar-estadia`,
      request
    );
  }
}
