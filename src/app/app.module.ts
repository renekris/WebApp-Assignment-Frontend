import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentPageComponent } from './shipment-page/shipment-page.component';
import { ShipmentAddComponent } from './shipment-add/shipment-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ShipmentAddBagsComponent } from './shipment-add-bags/shipment-add-bags.component';
import { ShipmentAddFinalizeComponent } from './shipment-add-finalize/shipment-add-finalize.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentPageComponent,
    ShipmentAddComponent,
    ShipmentAddBagsComponent,
    ShipmentAddFinalizeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
