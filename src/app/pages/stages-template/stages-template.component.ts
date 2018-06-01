import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stages-template',
  templateUrl: './stages-template.component.html',
  styleUrls: ['./stages-template.component.css']
})
export class StagesTemplateComponent implements OnInit {
  snum:number;
  constructor() {
    this.snum=5;
   }
  ngOnInit() {

  }
    }
  


