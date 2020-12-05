import { Component, NgModule, Input, Output, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { shipmentData } from '../shipment-add/shipment-add.component';
import { letterBagData, parcelBagData, parcelData } from '../shipment-add-bags/shipment-add-bags.component';


@Component({
  selector: 'app-shipment-add-finalize',
  templateUrl: './shipment-add-finalize.component.html',
  styleUrls: ['./shipment-add-finalize.component.scss']
})
export class ShipmentAddFinalizeComponent implements OnInit {

  constructor(public rest: RestService, private router: Router) { }

  shipmentData = shipmentData;
  letterBagData = letterBagData;
  parcelBagData = parcelBagData;
  parcelData = parcelData;

  ngOnInit(): void {
  }

  finalizeShipment(): void {

    this.rest.addData('Shipments', shipmentData).subscribe((resultShipmentData) => {
      this.rest.addData('ShipmentBags', { shipmentId: resultShipmentData.id }).subscribe((resultShipmentBagsData) => {
        letterBagData.shipmentBagsId = resultShipmentBagsData.id;
        parcelBagData.shipmentBagsId = resultShipmentBagsData.id;
        this.rest.addData('BagLetters', letterBagData).subscribe((resultBagLettersData) => {
        }, (err) => { console.log(err); });
        this.rest.addData('BagParcels', parcelBagData).subscribe((resultBagParcelsData) => {
          parcelData.bagParcelsId = resultBagParcelsData.id;
          this.rest.addData('Parcels', parcelData).subscribe((resultParcelData) => {
          }, (err) => { console.log(err); });
        }, (err) => { console.log(err); });
      }, (err) => { console.log(err); });
    }, (err) => { console.log(err); });

    this.router.navigate(['/shipments/']);
  }
}
