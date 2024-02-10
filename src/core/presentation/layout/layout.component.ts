import {Component, ViewChild} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {Router, RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {MaterialModule} from '../../../app/material.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [
    HeaderComponent,
    MatSidenavModule,
    RouterOutlet,
    SidebarComponent,
    MaterialModule
  ],
  standalone: true,
  styles: [
    `
      .sidenav {
        width: 100%;
        height: 100%;

        &__sidebar {
          width: 280px;
        }

        &__content {
          background: rgba(230, 245, 253, 1);
        }
      }

      .main {
        padding: 20px;
      }

      img {
        width: 100%;
      }

    `
  ]
})
export class LayoutComponent {
  title = 'sato-client';
  opened = true;
  @ViewChild('sidenav', {read: MatSidenav}) sideNav: MatSidenav;

  constructor(
    private readonly router: Router
  ) {
  }
  onToggle() {
    this.sideNav.toggle();
  }

  goHome() {
    this.router.navigateByUrl('');
  }
}
