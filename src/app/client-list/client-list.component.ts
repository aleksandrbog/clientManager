import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  fname: string;
  lname: string;
  contacts: Array<string>;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fname: "Иван", lname: 'Иванов', contacts: []},
];

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['fname', 'lname', 'contacts','actions'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
  }

}
