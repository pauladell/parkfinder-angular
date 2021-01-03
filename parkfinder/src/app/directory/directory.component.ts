import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
type Event = {
  innerHTML: string;
};
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  @Input() IsLoggedIn: string;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();
  @Input() where = '';
  constructor() {
    this.where = 'index';
    if (this.IsLoggedIn == undefined) {
      this.IsLoggedIn == 'false';
    }
  }

  ngOnInit(): void {}

  current_is_index() {
    this.where = 'index';

    this.buttonClick.emit('index');
  }
  current_is_contact() {
    this.where = 'contact';

    this.buttonClick.emit('contact');
  }
  current_is_coupons() {
    this.where = 'coupons';

    this.buttonClick.emit('coupons');
  }
  current_is_profile() {
    this.where = 'profile';

    this.buttonClick.emit('profile');
  }
}
