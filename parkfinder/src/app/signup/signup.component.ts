import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
