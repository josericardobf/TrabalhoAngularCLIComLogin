import { Component, OnInit } from '@angular/core';
import { Estado } from '../estado';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-estado-list',
  templateUrl: './estado-list.component.html',
  styleUrls: ['./estado-list.component.css']
})
export class EstadoListComponent implements OnInit {

  constructor(private estadoService: EstadosService) { }

  estados: Estado[] = [];

  /*ngOnInit() {
    this.estados = [
      {
        'codigo': '1',
        'nome': 'Minas Gerais'
      },
      {
        'codigo': '2',
        'nome': 'Rio de Janeiro'
      },
    ]
  }*/

  ngOnInit() {
    this.estadoService.getAll()
      .subscribe(data => this.estados = data,
        err => alert('aconteceu um erro ' + err)
      );
    this.estadoService.estadosChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.estados = data
      )
    );
  }

}
