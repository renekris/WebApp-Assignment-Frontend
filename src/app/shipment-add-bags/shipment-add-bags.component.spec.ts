import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentAddBagsComponent } from './shipment-add-bags.component';

describe('ShipmentAddBagsComponent', () => {
  let component: ShipmentAddBagsComponent;
  let fixture: ComponentFixture<ShipmentAddBagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentAddBagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentAddBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
