import {NgModule} from '@angular/core';
import {ReceiptsIssuedComponent} from './receipts-issued.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../app/material.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ReceiptsIssuedComponent
  }
];

@NgModule({
  declarations: [
    ReceiptsIssuedComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [],
})
export class ReceiptsIssuedModule {}
