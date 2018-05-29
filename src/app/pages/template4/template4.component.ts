import { Component, OnInit } from '@angular/core';
interface template4
{
tableData:object[];
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
      {rowID:'0',tableHeader:'Table Header'},
     {rowId: '1',value1:'value1',value2:'value2'} ,
     {rowId: '2',value1:'value1',value2:'value2',value3:'value3'} ,
     {rowId: '3',value1:'value1',value2:'value2',value3:'value3'} ,
     {rowId: '4',value1:'value1',value2:'value2',value3:'value3'} ,
     {rowId: '5',value1:'value1'} ,
    
    ],
   };
   }

  ngOnInit() {
  }

}
