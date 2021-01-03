import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() IsLoggedIn: string = localStorage.getItem('is_loggedin');
  @Input() cliente: client_type = {
    inputname: '',
    inputsurname: '',
    inputdni: '',
    inputbirthday: '',
    inputcar: '',
    inputenv: EnvClass.Eco,
  };
  //@Input()
  //@Output() IsLoggedIn: string;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();
  constructor() {
    //if (this.IsLoggedIn == null) {
    this.IsLoggedIn = 'false';
    //}
  }

  ngOnInit(): void {}
  signup(event: any) {
    this.IsLoggedIn = 'signup';

    localStorage.setItem('is_loggedin', this.IsLoggedIn);
    this.buttonClick.emit('signup');
  }
  logout(event: any) {
    this.IsLoggedIn = 'false';

    localStorage.setItem('is_loggedin', this.IsLoggedIn);
    this.buttonClick.emit('false');
  }
  login(event: any) {
    this.IsLoggedIn = 'true';
    this.buttonClick.emit('true');
    localStorage.setItem('is_loggedin', this.IsLoggedIn);
  }
}
