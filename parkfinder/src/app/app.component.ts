import { Component, Output, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
export enum EnvClass { //devuelve un numero
  Eco = 'Eco',
  Zero = 'Zero',
  B = 'B',
  C = 'C',
}
export type client_type = {
  inputname: string;
  inputsurname: string;
  inputdni: string;
  inputbirthday: string;
  inputcar: string;
  inputenv: EnvClass;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Park finder';
  IsLoggedIn: string = 'false';
  where: string = 'index';
  cliente: client_type = {
    inputname: 'Palomaaaa',
    inputsurname: 'Auladell',
    inputdni: '49081483N',
    inputbirthday: '1996-07-26',
    inputcar: 'BMW',
    inputenv: EnvClass.Eco,
  };
  updateLogIn(value: string) {
    this.IsLoggedIn = value;
    if (value == 'false') {
      this.where = 'index';
    }
  }
  updateCurrentPage(value: string) {
    this.where = value;
  }
  update_parent(cliente: client_type) {
    this.cliente = cliente;
  }
}
