import { Routes } from '@angular/router';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';
import { WorkOrderListComponent } from './components/work-orders/work-order-list/work-order-list.component';
import { ContractListComponent } from './components/contracts/contract-list/contract-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'equipments', pathMatch: 'full' },
  { path: 'equipments', component: EquipmentListComponent },
  { path: 'work-orders', component: WorkOrderListComponent },
  { path: 'contracts', component: ContractListComponent }
];