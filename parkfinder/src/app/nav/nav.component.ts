import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
enum EnvClass { //devuelve un numero
  Eco = 'Eco',
  Zero = 'Zero',
  B = 'B',
  C = 'C',
}
//type definition for clients
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
  //cliente is a input received from the parent app.component containing cliente information
  //cliente is used at nav.component to replace the "sign up button" once the cliente has logged in
  @Input() cliente: client_type;
  //buttonClick is the event that will be read at app.component and will be used to display/not display other components such as the signup component or the "profile" tab at directory.app
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();
  /* IsLoggedIn is the variable controlled from nav.component. It can take 3  values:
  true: user has logged in
  false: user has logged out
  signup: user has clicked sign up
   */
  IsLoggedIn: string;

  constructor() {
    //nav is initialized with the user logged out
    this.IsLoggedIn = 'false';
  }

  ngOnInit(): void {}
  /**
   * login_logout is called when one of the nav buttons is clicked
   * @param event : click event at one of the nav buttons: signup, login ot logout
   */
  login_logout(event: any) {
    console.log('the click event at nav is', event.toElement.innerHTML);
    if (event.toElement.innerHTML == 'Log in') {
      this.IsLoggedIn = 'true';
    } else if (event.toElement.innerHTML == 'Log out') {
      this.IsLoggedIn = 'false';
    } else if (event.toElement.innerHTML == 'Sign up ') {
      this.IsLoggedIn = 'signup';
    }
    //an event is sent to the parent component with on the values: true, false or signup
    this.buttonClick.emit(this.IsLoggedIn);
    //localStorage.setItem('is_loggedin', this.IsLoggedIn);
  }
}
