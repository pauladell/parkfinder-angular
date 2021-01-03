import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
enum EnvClass { //devuelve un numero
  Eco = 'Eco',
  Zero = 'Zero',
  B = 'B',
  C = 'C',
}
type client_type = {
  inputname: string;
  inputsurname: string;
  inputdni: string;
  inputbirthday: string;
  inputcar: string;
  inputenv: EnvClass;
};
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() cliente: client_type = {
    inputname: 'Paloma',
    inputsurname: 'Auladell',
    inputdni: '49081483N',
    inputbirthday: '1996-07-26',
    inputcar: 'BMW',
    inputenv: EnvClass.Eco,
  };
  @Output() ButtonClick: EventEmitter<client_type> = new EventEmitter<
    client_type
  >();
  constructor() {
    console.log(this.cliente);
    //this.populate_table();
  }

  ngOnInit(): void {}
  update_parent() {
    this.ButtonClick.emit(this.cliente);
  }
  populate_table() {
    var container = document.getElementById('div-for-profile-info');
    console.log(container);
    var tabla = document.createElement('table');

    tabla.classList.add('table');
    tabla.classList.add('table-striped');

    var cabecera = document.createElement('thead');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var tbody = document.createElement('tbody');
    th1.textContent = 'item';
    th2.textContent = 'value';
    tr.appendChild(th1);
    tr.appendChild(th2);
    cabecera.appendChild(tr);

    tabla.appendChild(cabecera);
    tabla.appendChild(tbody);
    container.appendChild(tabla);

    for (var i in this.cliente) {
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      td1.textContent = i;
      td2.textContent = this.cliente[i];
      console.log(i);
      console.log(this.cliente[i]);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    }
  }
}
