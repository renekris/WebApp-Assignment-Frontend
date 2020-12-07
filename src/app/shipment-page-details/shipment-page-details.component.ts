import { Component, OnInit } from '@angular/core';
import { RestService, Shipment } from '../rest.service';
// import { shipmentData } from '../shipment-add/shipment-add.component';
import { ActivatedRoute, Router } from '@angular/router';

export interface IShipment {
  id: string;
  shipmentNumber: string;
  airport: string;
  flightNumber: string;
  flightDate: DateConstructor;
  listBags: IListBags[];
}

interface IListBags {
  id: string;
  listBagPar: IListBagPar[];
  listBagLet: IListBagLet[];
}

interface IListBagLet {
  id: string;
  bagNumber: string;
  letterCount: number;
  weight: number;
  price: number;
}

interface IListBagPar {
  id: string;
  bagNumber: string;
  listParcels: IListParcel[];
}

interface IListParcel {
  id: string;
  parcelNumber: string;
  recipientName: string;
  destinationCountry: string;
  weight: number;
  price: number;
}

@Component({
  selector: 'app-shipment-page-details',
  templateUrl: './shipment-page-details.component.html',
  styleUrls: ['./shipment-page-details.component.scss']
})
export class ShipmentPageDetailsComponent implements OnInit {

  public shipments = Array<IShipment>();

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getShipmentDetails(this.route.snapshot.params.id).subscribe((data: any) => {
      this.shipments = data;
      console.log(this.shipments);
    });
  }

}
