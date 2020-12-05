import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentPageDetailsComponent } from './shipment-page-details.component';

describe('ShipmentPageDetailsComponent', () => {
  let component: ShipmentPageDetailsComponent;
  let fixture: ComponentFixture<ShipmentPageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentPageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
