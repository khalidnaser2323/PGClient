import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import {LicenceModel} from '../../Models/LicenceTableModel';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-licence-table',
  templateUrl: './licence-table.component.html',
  styleUrls: ['./licence-table.component.css']
})
export class LicenceTableComponent implements OnInit {
  ctx:any;
  chart=[];
  Licence:LicenceModel[]=
  [
    new LicenceModel('1/1/2016','East','Jones','Pencil','95','1.99','189.05'),
    new LicenceModel('1/2/2016','East','Jones','Pencil','95','1.99','300'),
    new LicenceModel('1/3/2016','East','Jones','Pencil','95','1.99','150'),
    new LicenceModel('1/4/2016','East','Jones','Pencil','95','1.99','160'),
    new LicenceModel('1/5/2016','East','Jones','Pencil','95','1.99','100'),
    new LicenceModel('1/6/2016','East','Jones','Pencil','95','1.99','300'),
    new LicenceModel('1/7/2016','East','Jones','Pencil','95','1.99','189.05'),
    
  ]
  @ViewChild('myCanvas') canvasRef: ElementRef;
  constructor() { }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
  
    this.chart = new Chart(this.ctx, {
      type: 'line',
    data: {
        labels: [this.Licence[0].OrderDate,
        this.Licence[1].OrderDate,
        this.Licence[2].OrderDate,
        this.Licence[3].OrderDate,
        this.Licence[4].OrderDate,
        this.Licence[5].OrderDate,
        this.Licence[6].OrderDate,],
        datasets: [{
            lineTension:'0',
           
            label: 'TotalCost',
            data: [this.Licence[0].TotalCost,
            this.Licence[1].TotalCost,
            this.Licence[2].TotalCost,
            this.Licence[3].TotalCost,
            this.Licence[4].TotalCost,
            this.Licence[5].TotalCost,
            this.Licence[6].TotalCost,
            
          ]
          ,
            backgroundColor: [
                'rgba(00, 99, 132, 0.2)',     
            ],
            fill:false,
            borderColor: [
                'rgba(0, 51, 0,1)',   
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}}