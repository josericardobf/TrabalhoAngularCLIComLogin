import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { EstadosService } from '../estados.service';
import { Estado } from '../estado';


@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.css']
})
export class EstadoFormComponent implements OnInit {

  private estadoIndex: number;
  private isNew: boolean = true;
  private estado: Estado;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private estadoService: EstadosService) { 
              }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.estadoIndex = params['id'];
          this.estadoService.get(this.estadoIndex)
          .subscribe(data => this.estado = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.estado = new Estado();
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/estados']);
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.estadoService.add(this.estado);
    } else {
      result = this.estadoService.update(this.estado);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso ' +data),
    err => {
      alert("An error occurred. "+ err);
    });
  }

  excluir() {
    if (this.estado.codigo == null) {
      alert('Selecione algum estado');
    } else {
      if (confirm('Você realmente quer excluir o estado '+this.estado.nome+'?')) {
        this.estadoService.remove(this.estado.codigo)
        .subscribe(
          data => alert('estado removido '+ data),
          err => {
            alert('estado não removido');
          });
          this.novo();
          this.voltar();
      }
    }
  }

}
