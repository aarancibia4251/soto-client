import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReceiptsIssuedModule} from './receipts-issued/receipts-issued.module';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'emision-comprobantes',
    pathMatch: 'full'
  },
  {
    path: 'emision-comprobantes',
    loadChildren: () => import('../administration/receipts-issued/receipts-issued.module').then(m => m.ReceiptsIssuedModule),
  }
]

@NgModule({
  imports: [
    ReceiptsIssuedModule,
    RouterModule.forChild(routes),
  ]
})
export class AdministrationModule {}
