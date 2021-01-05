import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
enum EnvClass { //devuelve un numero
  Eco = 'Eco',
  Zero = 'Zero',
  B = 'B',
  C = 'C',
}
/**
 * Custom validator for FormControl. Checks if the DNI matches the indicated regular expression and if the letetr matches the rule
 * @param control input DNI
 */
function verifydniValidator(control: FormControl) {
  var resultado = control.value.match(/\d{8}[a-zA-Z]/g);

  if (resultado == null) {
    return {
      dni: {
        error: 'doesnt meet regexp',
      },
    };
  } else {
    var numeros = control.value.substring(0, 8);

    var letra = control.value.substring(8, 9);

    var dninumber = parseInt(numeros);
    dninumber = dninumber % 23;
    var totalString = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var dniletter: string = totalString.substring(dninumber, dninumber + 1);

    if (dniletter == letra) {
      console.log('success');
      return null;
    } else {
      return {
        dni: {
          error: 'letter doesnt match',
        },
      };
    }
  }
}
/*
function doublecheck_pwd(control: FormControl) {
  if (control.value == this.pwd.value) {
    return null;
  } else {
    return {
      doublecheck_pwd: {
        error: 'letter doesnt match',
      },
    };
  }
}*/
/**
 * Checks client is above 18yo and bellow 100
 * @param control input birthdate
 */
function verifyage(control: FormControl) {
  var d = new Date(control.value);
  var elapsed_time = Date.now() - d.getTime();
  var dif_time = new Date(elapsed_time);
  var elapsed_year = dif_time.getUTCFullYear();
  var age = Math.abs(elapsed_year - 1970);

  console.log(age);
  if (age < 18 || age > 100) {
    console.log('invalid age');
    return {
      verifyage_error: {
        error: 'invalid age',
      },
    };
  } else {
    return null;
  }
}
/**
 * Checks if carplate input matches the regular expressions
 * @param control carplate input
 */
function verifycarplate(control: FormControl) {
  var resultado_antiguo = control.value.match(/[a-zA-Z]{2}\d{4}[a-zA-Z]{2}/g);
  var resultado_nuevo = control.value.match(/\d{4}[a-zA-Z]{3}/g);

  if (resultado_antiguo !== null || resultado_nuevo !== null) {
    return null;
  } else {
    return {
      verifycarplate_error: {
        error: 'invalid carplate',
      },
    };
  }
}

/*function verifyenv(control:FormControl) {
  //var carclass = document.getElementById('inputenv');

  //var carclassper = carclass.options[carclass.selectedIndex].value;
  var descuento: string;
  switch (control.value) {
    case 'invalid':
      descuento = 'Select env class';
      break;
    case 'B':
    case 'C':
      descuento = '0%';
      break;
    case '0':
      descuento = '10%';
      break;
    case 'ECO':
      descuento = '5%';
      break;
  }
  document.getElementById('carpercentage').innerHTML = descuento;
}*/
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  emailCtrl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
  ]);
  dni = new FormControl('', [Validators.required, verifydniValidator]);
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  surname = new FormControl('', [Validators.required, Validators.minLength(3)]);
  pwd = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
    ),
  ]);
  age = new FormControl('', [Validators.required, verifyage]);
  carplate = new FormControl('', [Validators.required, verifycarplate]);

  //doublecheck_pwd = new FormControl('', [Validators.required, doublecheck_pwd]);

  constructor() {}

  ngOnInit(): void {}
  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }
  calculatepricelist() {
    console.log(initialprice);
    var initialprice = 75;
    var currentprice: number = 0;
    var html1 =
      '<table class="table table-dark text-light"><thead><tr><th>Discount</th><th>Price</th></tr></thead><tbody>';
    for (var discount = 0; discount <= 50; discount += 5) {
      currentprice = (initialprice * (100 - discount)) / 100;
      html1 +=
        '<tr><td>' + discount + '%</td><td>' + currentprice + '€</td></tr>';
    }
    html1 += '</tbody></table>';
    console.log(html1);
    document.getElementById('pricelist').innerHTML = html1;
  }
}
