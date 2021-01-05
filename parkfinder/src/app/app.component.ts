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
  //IsLoggedIN:equals 'true'/'false'/'signup'. It's updated at the "updateLogIn" function with input information from nav.component when the cliente clicks the nav.component buttons
  IsLoggedIn: string = 'false';
  //Variable updated at the "updateCurrentPage" function with input information from directory.component
  where: string = 'Index';
  //Cliente input information
  cliente: client_type = {
    inputname: 'Paloma',
    inputsurname: 'Auladell',
    inputdni: '49081483N',
    inputbirthday: '1996-07-26',
    inputcar: 'BMW',
    inputenv: EnvClass.Eco,
  };

  //Called when a click event occurs on one of the nav.component buttons
  updateLogIn(value: string) {
    this.IsLoggedIn = value;
    if (value == 'false') {
      this.where = 'Index';
    }
  }
  //Called when a click event occurs on one of the diretory.component buttons

  updateCurrentPage(value: string) {
    this.where = value;
  }
}
