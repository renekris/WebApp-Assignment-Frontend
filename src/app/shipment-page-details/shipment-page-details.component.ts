import { Component, OnInit } from '@angular/core';
import { RestService, Shipment } from '../rest.service';
// import { shipmentData } from '../shipment-add/shipment-add.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-shipment-page-details',
  templateUrl: './shipment-page-details.component.html',
  styleUrls: ['./shipment-page-details.component.scss']
})
export class ShipmentPageDetailsComponent implements OnInit {

  shipment = {};

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getShipment(this.route.snapshot.params.id).subscribe((data: Shipment) =>
    this.shipment = { ...data }
    );
  }

}
