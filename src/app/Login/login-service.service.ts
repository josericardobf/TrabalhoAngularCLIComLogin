import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class LoginServiceService {

  private uri: string = "http://localhost:8080/login";

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;

  constructor(private router: Router, private http: Http) { }

  signIn(user: User) {
    this.getLogin(user).subscribe(
      us => {
        if (us.email === user.email) {
          this.authenticated = true;
          this.showNavBar(true);
          this.router.navigate(['/']);
        }else{
          this.authenticated = false;
          this.showNavBar(false);
          this.router.navigate(['/signin']);
        }
      },
      err => { console.log(err) }
    );

  /*signIn(user: User) {
    if ((user.email === "user@email.com" || user.email === "usuario@email.com") && user.password === "12345") {
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['/']);
    }
    else {
      this.authenticated = false;
    }*/
  }

  getLogin(user: User): Observable<User> {
    return this.http.post(`${this.uri}`, user, {headers: this.getHeaders()})
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private handleError(error: any) {
    let erro = error.messsage || 'Server error';
    console.log('Ocorreu um erro ' , error);
    return Observable.throw(erro);
  }
}
