import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface Parcel {
  id: number;
  parcelNumber: string;
  recipientName: string;
  destinationCountry: string;
  weight: number;
  price: number;
  bagParcelsId: string;
}

export interface BagParcel {
  id: string;
  bagNumber: string;
  shipmentBagsId: string;
}

export interface BagLetters {
  id: string;
  bagNumber: string;
  letterCount: number;
  weight: number;
  price: number;
  shipmentBagsId: string;
}

export interface ShipmentBags {
  id: string;
  shipmentId: string;
}

export interface Shipment {
  id: string;
  shipmentNumber: string;
  airport: number;
  flightNumber: string;
  flightDate: Date;
}

export const endpoint = 'https://localhost:5001/api/';
const params = new HttpParams().set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient, private router: Router) { }

  getShipments(): Observable<any> {
    return this.http.get<Shipment>(endpoint + 'Shipments').pipe(
      catchError(this.handleError)
    );
  }

  getShipment(id: string): Observable<any> {
    return this.http.get<Shipment>(endpoint + 'Shipments/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addData(api: string, data: any): Observable<any> {
    return this.http.post<any>(endpoint + api, data, { params }).pipe(
      catchError(this.handleError)
    );
  }

  moveTo(location: any): void {
    this.router.navigate([location]);
  }


  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
