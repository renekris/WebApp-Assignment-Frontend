import { Component, NgModule, Input, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';


interface Airport {
  value: string;
  saveValue: string;
}

export let shipmentData = { shipmentNumber: 'AAA-666666', airport: 'TLL', flightNumber: 'AA9999', flightDate: '2020-12-10T01:53:51.405' };

@Component({
  selector: 'app-shipment-add',
  templateUrl: './shipment-add.component.html',
  styleUrls: ['./shipment-add.component.scss']
})


export class ShipmentAddComponent implements OnInit {
  constructor(public rest: RestService, private router: Router) { }

  airport: Airport[] = [
    {value: '0', saveValue: 'TLL'},
    {value: '1', saveValue: 'RIX'},
    {value: '2', saveValue: 'HEL'}
  ];
  minDate = new Date();

  @Input() shipmentData = shipmentData;


  ngOnInit(): void {
  }

  routeAndSave(): void {
    shipmentData = this.shipmentData;
    this.router.navigate(['/bags/']);
  }

  /*
  addShipment(): void {
    this.rest.addData('Shipments', this.shipment).subscribe((result) => {
      this.rest.addData('ShipmentBags', {shipmentId: result.id});
      shipmentData.id = result.id;
    }, (err) => {
      console.log(err);
    });
    this.router.navigate(['/bags/']);
  }
  */

}

