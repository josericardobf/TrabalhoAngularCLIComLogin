import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  constructor(private categoriaService: CategoriasService) { }

  categorias: Categoria[] = [];

  /*ngOnInit() {
    this.categorias = [
      {
        'codigo': '1',
        'nome': 'Categoria 1'
      },
      {
        'codigo': '2',
        'nome': 'Categoria 2'
      },
    ]
  }*/

  ngOnInit() {
    this.categoriaService.getAll()
      .subscribe(data => this.categorias = data,
        err => alert('aconteceu um erro ' + err)
      );
    this.categoriaService.categoriasChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.categorias = data
      )
    );
  }

}
