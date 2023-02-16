import { ParkingSpotService } from './services/parking-spot.service';
import { Component } from '@angular/core';
import { ParkingSpotResponse } from './models/parking-spot-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parkingControlUi';
  displayedColumns: string[] = ['licensePlate',
                                'carEntryDate',
                                'carEntryTime',
                                'carLeaveDate',
                                'carLeaveTime',
                                'parkingSpotStatus',
                                'priceOfParking',
                                'timeOfParking'];

  parkingSpots: ParkingSpotResponse[] = [];


  constructor(private parkingSpotService: ParkingSpotService){  }

  ngOnInit() : void {
    this.parkingSpotService
    .getParkingSpots()
    .subscribe((result : ParkingSpotResponse[]) => (this.parkingSpots = result));
  }
}
