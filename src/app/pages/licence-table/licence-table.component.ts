import { Component, OnInit } from '@angular/core';
import {LicenceModel} from '../../Models/LicenceTableModel'
@Component({
  selector: 'app-licence-table',
  templateUrl: './licence-table.component.html',
  styleUrls: ['./licence-table.component.css']
})
export class LicenceTableComponent implements OnInit {


  Licence:LicenceModel[]=
  [
    new LicenceModel('1/6/2016','East','Jones','Pencil','95','1.99','189.05'),
    new LicenceModel('1/6/2016','East','Jones','Pencil','95','1.99','189.05'),
    new LicenceModel('1/6/2016','East','Jones','Pencil','95','1.99','189.05'),
    new LicenceModel('1/6/2016','East','Jones','Pencil','95','1.99','189.05'),
    new LicenceModel('1/6/2016','East','Jones','Pencil','95','1.99','189.05'),
    new LicenceModel('1/6/2016','East','Jones','Pencil','95','1.99','189.05'),
    new LicenceModel('1/6/2016','East','Jones','Pencil','95','1.99','189.05'),
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
