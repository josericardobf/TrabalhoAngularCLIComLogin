import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Categoria } from './categoria';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoriasService {

  private url: string = "http://localhost:8080/categorias";

  categoriasChanged = new EventEmitter<Observable<Categoria[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get(this.url)
            .map(res => res.json())
            .catch(this.handleError);         
  }

  private handleError(error: any) {
    let erro = error.messsage || 'Server error';
    console.error('Ocorreu um erro ',error);
    return Observable.throw(erro);
  }

  add(categoria: Categoria) {
    return this.http.post(this.url,JSON.stringify(categoria),
    {headers: this.getHeaders()})
    .do(data => this.categoriasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  update(categoria: Categoria) {
    return this.http.put(this.url,JSON.stringify(categoria),
    {headers: this.getHeaders()})
    .do(data => this.categoriasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id),
           {headers: this.getHeaders()})
           //.map(res => res.json())
           .do(data => this.categoriasChanged.emit(this.getAll()))
           .catch(this.handleError);
  }

  get(id: number) {
    return this.getAll()
           .map((list: any) => list.find(categoria => categoria.codigo == id))
           .catch(this.handleError);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return headers;
  }

  private getUrl(id: number) {
    return `${this.url}/${id}`;
  }







}
