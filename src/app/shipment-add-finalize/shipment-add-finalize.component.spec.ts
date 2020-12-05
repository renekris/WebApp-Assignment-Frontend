import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentAddFinalizeComponent } from './shipment-add-finalize.component';

describe('ShipmentAddFinalizeComponent', () => {
  let component: ShipmentAddFinalizeComponent;
  let fixture: ComponentFixture<ShipmentAddFinalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentAddFinalizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentAddFinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
