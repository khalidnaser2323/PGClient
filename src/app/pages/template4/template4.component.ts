import { Component, OnInit } from '@angular/core';
interface template4
{
 tableData:string[] ;
}
@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})

export class Template4Component implements OnInit {
  temp:template4;
  constructor() {

   this.temp={
     tableData:[
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female',
     'Cattle gathered waters female'],
   };
   }

  ngOnInit() {
  }

}
