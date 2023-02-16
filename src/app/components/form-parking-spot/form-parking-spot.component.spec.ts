import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParkingSpotComponent } from './form-parking-spot.component';

describe('FormParkingSpotComponent', () => {
  let component: FormParkingSpotComponent;
  let fixture: ComponentFixture<FormParkingSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormParkingSpotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormParkingSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
