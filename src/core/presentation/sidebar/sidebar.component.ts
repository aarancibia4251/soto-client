import {Component, OnInit} from '@angular/core';
import {MaterialModule} from '../../../app/material.module';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SidebarComponent implements OnInit {
  menus = [];

  constructor(
    private readonly router: Router,
  ) {
  }

  ngOnInit() {

    this.router.events.subscribe(() => {
      this.addActiveField();
    })

    this.menus.push({name: 'Ventas', subMenus: []});
    this.menus.push({name: 'Administración',
      subMenus: [{name: 'Emisión de comprobantes', route: 'administracion/emision-comprobantes'}, {name: 'Movimientos bancarios'}, {name: 'Ingresos'}, {name: 'Otros ingresos'}, {name: 'Pagos'}, {name: 'Pagos internos'}, {name: 'Reporte IATA'}, {name: 'Reporte terrestre'}],
      },
    );
    this.menus.push({name: 'Contabilidad', subMenus: []});
    this.menus.push({name: 'Catalogo', subMenus: []});
    this.menus.push({name: 'Sistema', subMenus: []});
    this.menus.push({name: 'View', subMenus: []});

  }

  addActiveField() {
    this.menus.forEach(menu => {
      menu.active = menu.subMenus.some(subMenu => this.router.url.includes(subMenu.route));
    });
  }
}
