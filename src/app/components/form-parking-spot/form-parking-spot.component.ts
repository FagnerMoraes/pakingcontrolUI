import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-parking-spot',
  templateUrl: './form-parking-spot.component.html',
  styleUrls: ['./form-parking-spot.component.scss']
})
export class FormParkingSpotComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

}
