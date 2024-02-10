import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  menus = [];

  ngOnInit() {
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
}
