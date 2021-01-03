import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
  @Input() array_coupons: {
    src: string;
    alt: string;
    content: string;
    link_name: string;
  }[] = [];
  constructor() {
    var coupons = `[{
      "src": "../../assets/img/coupon1.jpg",
      "alt": "Card image",
      "content": "One free coupon for you",
      "link_name": "Save coupon"
    },


    {
      "src": "../../assets/img/coupon2.png",
      "alt": "Card image",
      "content": "One dummy coupon for you as well",
      "link_name": "Save coupon"


    },

    {
      "src": "../../assets/img/coupon3.jpg",
      "alt": "Card image",
      "content": "Free coupon",
      "link_name": "Save coupon"


    },

    {
      "src": "../../assets/img/coupon4.svg",
      "alt": "Card image",
      "content": "View this coupon",
      "link_name": "Save coupon"


    },

    {
      "src": "../../assets/img/coupon5.jpg",
      "alt": "Card image",
      "content": "Here's a free coupon",
      "link_name": "Save coupon"


    },

    {
      "src": "../../assets/img/coupon6.png",
      "alt": "Card image",
      "content": "Get this free coupon",
      "link_name": "Save coupon"


    }


    ]`;

    this.array_coupons = JSON.parse(coupons);
    console.log(this.array_coupons);
  }

  ngOnInit(): void {}
}
