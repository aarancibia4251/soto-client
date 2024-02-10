import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {MaterialModule} from '../../../app/material.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule {}
