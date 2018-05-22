import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { Chart } from 'chart.js';

interface template6
{
  tempName:string;
  tempDescribtion:string;
  label:string;
  labelNames:string[];
  yValues:string[];
}
@Component({
  selector: 'app-template6',
  templateUrl: './template6.component.html',
  styleUrls: ['./template6.component.css']
})
export class Template6Component implements OnInit {
  ctx:any;
  chart=[];
   temp:template6;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  constructor() { 
   
    this.temp ={
    tempName:'Replenish place appear',
    tempDescribtion:'Make. Be. Theyre. Is abundantly earth Replenish place appear so evening day seas set cattle created whales form  underTheyre youre fly appear there grass seasons day gathering let given it hath.',
    label:'points',
    labelNames:['Startup','Marketing','Analysis','Opportunites','Growth'],
    yValues:['40','20','30','20','60']
  };
  }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.lineJoin = 'miter';
    this.chart = new Chart(this.ctx, {
      type: 'line',
      
    data: {
      labels:this.temp.labelNames ,
        datasets: [{
            label:this.temp.label,
            lineTension:'0',
            data:this.temp.yValues,
            backgroundColor: 'rgb(51, 204, 255)', 
            borderColor:'rgb(204, 204, 204)', 
            borderWidth: 5
         }],
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
  
  }
  
 
}
