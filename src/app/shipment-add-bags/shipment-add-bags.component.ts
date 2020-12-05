import { Component, NgModule, Input, Output, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { shipmentData } from '../shipment-add/shipment-add.component';

export let letterBagData = { bagNumber: '123451234512345', letterCount: 3, weight: 4.212, price: 1.43, shipmentBagsId: '' };
export let parcelBagData = { bagNumber: '123451234512345', shipmentBagsId: '' };
// tslint:disable-next-line: max-line-length
export let parcelData = { parcelNumber: 'AA666666AA', recipientName: 'Rene Kristofer Pohlak', destinationCountry: 'EE', weight: 5.124, price: 1.42, bagParcelsId: '' };

@Component({
  selector: 'app-shipment-add-bags',
  templateUrl: './shipment-add-bags.component.html',
  styleUrls: ['./shipment-add-bags.component.scss']
})
export class ShipmentAddBagsComponent implements OnInit {

  constructor(public rest: RestService, private router: Router) { }

  shipmentData = shipmentData;

  @Input() letterBagData = letterBagData;
  @Input() parcelBagData = parcelBagData;
  @Input() parcelData = parcelData;
  ngOnInit(): void {
  }

  routeAndSave(): void {
    letterBagData = this.letterBagData;
    parcelBagData = this.parcelBagData;
    parcelData = this.parcelData;

    this.router.navigate(['/finalize/']);
  }

}
