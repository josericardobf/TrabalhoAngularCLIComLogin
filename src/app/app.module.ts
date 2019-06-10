import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app.router';
import { LoginComponent } from './Login/login/login.component';
import { AuthGuard } from './Login/login-guard';
import { LoginServiceService } from './Login/login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
