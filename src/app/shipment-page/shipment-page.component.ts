import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { endpoint, Parcel, BagParcel, BagLetters, Shipment, ShipmentBags, RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-page',
  templateUrl: './shipment-page.component.html',
  styleUrls: ['./shipment-page.component.scss']
})
export class ShipmentPageComponent implements OnInit {

  shipment: Shipment[] = [];

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getShipments();
  }

  getShipments(): void {
    this.rest.getShipments().subscribe((resp: any) => {
      this.shipment = resp;
      console.log(this.shipment);
    });
  }

  add(): void {
    this.router.navigate(['/shipment-add']);
  }


}
