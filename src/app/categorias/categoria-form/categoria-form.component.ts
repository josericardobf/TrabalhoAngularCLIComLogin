import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { CategoriasService } from '../categorias.service';
import { Categoria } from '../categoria';


@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  private categoriaIndex: number;
  private isNew: boolean = true;
  private categoria: Categoria;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoriaService: CategoriasService) { 
              }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.categoriaIndex = params['id'];
          this.categoriaService.get(this.categoriaIndex)
          .subscribe(data => this.categoria = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.categoria = new Categoria();
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/categorias']);
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.categoriaService.add(this.categoria);
    } else {
      result = this.categoriaService.update(this.categoria);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso ' +data),
    err => {
      alert("An error occurred. "+ err);
    });
  }

  excluir() {
    if (this.categoria.codigo == null) {
      alert('Selecione alguma categoria');
    } else {
      if (confirm('Você realmente quer excluir a categoria '+this.categoria.nome+'?')) {
        this.categoriaService.remove(this.categoria.codigo)
        .subscribe(
          data => alert('Categoria removida '+data),
          err => {
            alert('Categoria não removida');
          });
          this.novo();
          this.voltar();
      }
    }
  }

}
