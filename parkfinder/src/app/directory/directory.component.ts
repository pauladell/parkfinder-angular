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
  //IsLoggedIn: is an input coming from app.component. Its value is controlled from nav.component
  //IsLoggedIn values is used to show/hide the "profile" tab
  @Input() IsLoggedIn: string;
  //buttonClick:Event sent to parent app.component containing the value of the sidebar tab clicked, which is essentially the value of where
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();
  //where: value of the current sidebar tab. This value is also used in the HTML to highligth the current tab
  where: string = '';
  constructor() {
    //where is initialized to the homepage "index"
    this.where = 'Index';
  }

  ngOnInit(): void {}
  /**
   * Received the click event at each of the tabs and generates a event emmiter used at the parent component to show/hide other components.
   * @param event  click event at each of the sidebar tab
   */
  current(event: any) {
    /*If I click outside of the sidebar test, the innerHTML does not contain one of the sidebr titles
    but something like <span _ngcontent...>*/
    if (event.toElement.innerHTML.includes('_ngcontent')) {
    } else {
      /*Assign name of the section clicked to "where" an emit an event containing this value
      This value will be read at app.component */
      this.where = event.toElement.innerHTML;
      this.buttonClick.emit(this.where);
    }
  }
}
