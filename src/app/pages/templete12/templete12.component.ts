import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';


interface template12
{
  
  labe1Names:string[];
  yValues:string[];
  color:string[];
}
@Component({
  selector: 'app-templete12',
  templateUrl: './templete12.component.html',
  styleUrls: ['./templete12.component.css']
})
export class Templete12Component implements OnInit {
  ctx:any;
  chart=[];
  temp:template12;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  constructor() {
    this.temp=
    {
      labe1Names:[' January',' February',' March',' April',' May',' June',' July',' August','September',' October',' November',' December '],
      yValues:['40','30','50','70','60','80','90','120','130','60','40','70'],
      color:['rgb(0, 77, 77,0.2)','rgb(0, 153, 153,0.2)','rgb(0, 230, 230,0.2)',
      'rgb(0, 51, 31,0.2)','rgb(0, 26, 15,0.2)','rgb(77, 255, 136,0.2)',
      'rgb(0, 204, 68,0.2)','rgb(0, 153, 51,0.2)','rgb(102, 153, 153,0.2)','rgb(148, 184, 184,0.2)',
      'rgb(61, 92, 92,0.2)','rgb(41, 61, 61,0.2)']
    }
   }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'bar',
    data: {
      labels:this.temp.labe1Names,
        datasets: [{
        label:'Years' , 
        backgroundColor:this.temp.color,
         borderColor:'rgb(41, 61, 61,0.2)',
         borderWidth:1, 
         data:this.temp.yValues,
        },
        
      ]
    },
 
    options: {
      title: {
        display: true,
        text: 'Years',
        fontSize:20,
    },
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
