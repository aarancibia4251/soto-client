import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MaterialModule} from '../../../app/material.module';
import {NgIf} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MaterialModule,
    NgIf,
    RouterModule,
  ]
})
export class HeaderComponent {
  @Output() toggleEmitter: EventEmitter<void> = new EventEmitter<void>();
  toggle() {
    this.toggleEmitter.emit();
  }
}
