import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentPageComponent } from './shipment-page/shipment-page.component';
import { ShipmentAddComponent } from './shipment-add/shipment-add.component';
import { ShipmentAddBagsComponent } from './shipment-add-bags/shipment-add-bags.component';
import { ShipmentAddFinalizeComponent } from './shipment-add-finalize/shipment-add-finalize.component';
import { ShipmentPageDetailsComponent } from './shipment-page-details/shipment-page-details.component';

const routes: Routes = [
  {
    path: 'add',
    component: ShipmentAddComponent,
    data: { title: 'ShipmentsAdd' }
  },
  {
    path: 'shipments',
    component: ShipmentPageComponent,
    data: { title: 'ShipmentsList' }
  },
  {
    path: 'bags',
    component: ShipmentAddBagsComponent,
    data: { title: 'Bags' }
  },
  {
    path: 'finalize',
    component: ShipmentAddFinalizeComponent,
    data: { title: 'FinalizeShipment' }
  },
  {
    path: 'details/:id',
    component: ShipmentPageDetailsComponent,
    data: { title: 'ShipmentDetails'}
  },
  {
    path: '',
    redirectTo: '/shipments',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
